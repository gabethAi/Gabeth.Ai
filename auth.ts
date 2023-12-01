import NextAuth from "next-auth";

// import Apple from "next-auth/providers/apple"
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import type { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "./prisma";

export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Apple,
    GitHub,
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
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
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
