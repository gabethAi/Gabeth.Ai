import NextAuth from "next-auth";

// import Apple from "next-auth/providers/apple"
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import { loginUser } from "./lib/actions";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./lib/db/drizzle";

export const config = {
  adapter: DrizzleAdapter(db),
  // debug: true,
  providers: [
    // Apple,
    GitHub,
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials, "credentials");
        // Add logic here to look up the user from the credentials supplied
        const user = await loginUser({
          email: credentials.email as string,
          password: credentials.password as string,
        });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return Promise.resolve(null);

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user",
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },

    signIn({ user, account, profile, email, credentials }) {
      // console.log("signIn", { user, account, profile, email, credentials });

      if (user) {
        return true;
      }
      return false;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
