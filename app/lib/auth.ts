import NextAuth, { type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextResponse } from "next/server";
import { db } from "./db/drizzle";
import { redirect } from "next/navigation";
import { kv } from "@vercel/kv";
import { getUser } from "./actions";
import { fetchUser } from "../utils/actions";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's id. */
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // adapter: DrizzleAdapter(db),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user",
  },
  callbacks: {
    async signIn({ account, profile, user, credentials }) {
      // console.log(user, credentials, "user from signIn");
      if (account?.provider === "google" && profile?.email_verified === true) {
        // Create a user object
        const user = {
          id: profile.email,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          provider: account.provider,
        };

        // console.log(user, "user from signIn");

        const result = await fetchUser(user.id as string);

        if (!result) {
          kv.set(`user:${user.id}`, JSON.stringify(user));

          console.log("new user", user);
        }

        // return user;

        return true;
      }

      // redirect("/auth/login");

      return true;
    },

    jwt({ token, profile }) {
      // console.log("token", token);
      // console.log("profile", profile);
      if (profile) {
        token.id = profile.id;
        token.image = profile.avatar_url || profile.picture;
      }
      return token;
    },
    authorized({ request, auth }) {
      return !!auth?.user; // this ensures there is a logged in user for -every- request
    },
  },
});
