import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, nanoid } from "ai";
import { kv } from "@vercel/kv";
import { getUser } from "@/lib/actions";
import { redirect } from "next/navigation";
import { getChat } from "@/utils/actions";
import { revalidatePath } from "next/cache";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, previewToken } = json;
  const user = await getUser();

  const userId = user?.email;
  const id = json.id || nanoid(10);
  const title = json.messages[0].content.substring(0, 100);
  const createdAt = Date.now();

  if (!userId) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

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
      const chat = await getChat(id, userId);

      const path = `/chat/${id}`;
      const payload = {
        id,
        title,
        userId: user?.email,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: "assistant",
          },
        ],
      };

      await kv.hmset(`chat:${id}`, payload);
      await kv.zadd(`user:chat:${user?.email}`, {
        score: createdAt,
        member: `chat:${id}`,
      });

      if (!chat) {
        console.log("chat not found");
        revalidatePath(`/chat`);
        // const response = await fetch(`/api/revalidate?path=/chat`);

        // console.log(response, "response");
      }
    },
  });

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
