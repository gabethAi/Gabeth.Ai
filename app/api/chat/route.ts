import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, nanoid } from "ai";
import {
  getChatById,
  getUser,
  addMessageToDb,
  saveChatToDb,
} from "@/lib/actions";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, previewToken } = json;
  const chatId = json.id || nanoid(10);
  const title = json.messages[0].content.substring(0, 100);

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
    temperature: 0.7,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

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

        const messagesToInsert = [
          {
            id: nanoid(10),
            chatId: chatId,
            role: lastMessage.role,
            content: lastMessage.content,
            createdAt: new Date(),
          },
          {
            id: nanoid(10),
            chatId: chatId,
            role: "assistant",
            content: completion,
            createdAt: new Date(Date.now() + 1000),
          },
        ];

        for (const message of messagesToInsert) {
          // save each message to the database
          await addMessageToDb(message);
        }
      } catch (error) {
        console.error("Error saving chat:", error);
        // throw error;
      }
    },
  });

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
