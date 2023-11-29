import { redirect } from "next/navigation";
import { auth } from "./app/lib/auth";
import { NextResponse } from "next/server";

export default auth(async (req) => {
  const unprotectedRoutes = ["/", "/auth/login", "/auth/signout"];

  console.log(req.nextUrl, "req.nextUrl");
  if (!req.auth && !unprotectedRoutes.includes(req.nextUrl.pathname)) {
    const url = req.clone();

    // return NextResponse.rewrite(newReq.toString());
    // const url = req.nextUrl.clone();
    // url.pathname = "/auth/login";
    // console.log("redirecting");
    // return NextResponse.redirect(url.toString());

    // return redirect("/auth/login");
  }
});

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
