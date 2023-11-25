import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { nanoid } from "@/app/lib/utils";
import { kv } from "@vercel/kv";
import { getUser } from "@/app/lib/actions";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, previewToken } = json;
  const user = await getUser();

  const userId = user?.email;

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
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100);
      const id = json.id ?? nanoid();
      const createdAt = Date.now();
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
    },
  });

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
