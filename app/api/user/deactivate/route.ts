import { deactivateAccount } from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
     await deactivateAccount(body.userId);

    return NextResponse.json(
      {
        message: "Account deactivated.",
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error deactivating account:", error);
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
