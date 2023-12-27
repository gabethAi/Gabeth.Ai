import { getChatsByUserId, getUser } from "@/lib/actions";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      {
        error: "Missing user ID",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const chats = await getChatsByUserId(userId);

    return NextResponse.json(chats, {
      status: 200,
    });
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
