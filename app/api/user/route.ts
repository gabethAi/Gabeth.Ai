import { getUser } from "@/lib/actions";
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUser();

    const data = await kv.get(`user:${user.email}`);

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({
      error: "Unauthorized",
    });
  }
}
