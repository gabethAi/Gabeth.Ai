import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, nanoid } from "ai";
import {
  getChatById,
  getUser,
  addMessageToDb,
  saveChatToDb,
  getMessagesByChatId,
  getMessageById,
  updateMessageById,
} from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { Message } from "@/lib/db/schema";

export const runtime = "edge";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// });

// const fireworks = new OpenAI({
//   baseURL: "https://api.fireworks.ai/inference/v1",
//   apiKey: process.env.FIREWORKS_API_KEY!,
// });

export async function POST(req: Request) {
  const body = await req.json();
  const { messages, previewToken } = body;
  const chatId = body.id || nanoid(10);
  const title = body.messages[0].content.substring(0, 100);

  console.log(body, "body");

  try {
    // // Request the OpenAI API for the response based on the prompt
    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   stream: true,
    //   messages: messages,
    //   temperature: 0.7,
    //   max_tokens: 500,
    //   top_p: 1,
    //   frequency_penalty: 1,
    //   presence_penalty: 1,
    // });

    const response = await fetch(
      `https://api.fireworks.ai/inference/v1/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
          Authorization: `Bearer ${process.env.FIREWORKS_API_KEY}`,
        },
        body: JSON.stringify({
          model: "accounts/fireworks/models/llama-v2-70b-chat",
          messages: messages,
          stream: true,
          n: 1,
          max_tokens: 1000,
          temperature: 0.2,
        }),
      }
    );

    // // Request the Fireworks API for the response based on the prompt
    // const response = await fireworks.chat.completions.create({
    //   model: "accounts/fireworks/models/llama70b-v2-chat",
    //   stream: true,
    //   messages: messages,
    //   max_tokens: 1000,
    //   temperature: 0.75,
    //   top_p: 1,
    //   frequency_penalty: 1,
    // });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response, {
      async onCompletion(completion) {},
      async onFinal(completion) {
        const path = `/chat/${chatId}`;

        try {
          const savedChat = await getChatById(chatId);

          /**
           * Saves the chat to the database if it doesn't already exist.
           * @param chatId - The ID of the chat.
           * @param title - The title of the chat.
           * @param path - The path of the chat.
           */
          if (!savedChat) {
            await saveChatToDb({
              id: chatId,
              title,
              createdAt: new Date(),
              path: path,
            });
          }

          // get the last message from the messages array
          const lastMessage = messages[messages.length - 1];

          if (body.regenerate) {
            const message = await getMessageById(body.messageId);

            if (message) {
              message.childMessages = message.childMessages
                ? [message.content, ...message.childMessages, completion]
                : [completion];
              console.log(message, "message");
              await addMessageToDb(message);
            }

            return;
          }

          const messagesToInsert: Message[] = [
            {
              id: nanoid(10),
              chatId: chatId,
              role: lastMessage.role,
              content: lastMessage.content,
              createdAt: new Date(),
              parentId: null,
              childMessages: null,
            },
            {
              id: nanoid(10),
              chatId: chatId,
              role: "assistant",
              content: completion,
              createdAt: new Date(Date.now() + 1000),
              parentId: body.regenerate ? body.messageId : null,
              childMessages: null,
            },
          ];

          // console.log(messagesToInsert, "messagesToInsert");

          for (const message of messagesToInsert) {
            // save each message to the database
            await addMessageToDb(message);
          }
        } catch (error) {
          console.error("Error saving chat:", error);
          throw error;
        }
      },
    });

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.log(error, "error");

    throw error;
  }
}

export async function GET(request: NextRequest) {
  const chatId = request.nextUrl.searchParams.get("chatId");

  if (!chatId) {
    return NextResponse.json(
      {
        error: "Missing chat ID",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const chat = await getChatById(chatId);
    const chatMessages = await getMessagesByChatId(chatId);

    return NextResponse.json(
      {
        chat,
        chatMessages,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error getting chats:", error);
    return NextResponse.json(
      {
        error: error.message || "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
