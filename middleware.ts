import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth(async (req) => {
  const unprotectedRoutes = ["/", "/auth/login", "/auth/signout"];
});

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
