import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextResponse } from "next/server";
import { db } from "./db/drizzle";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        console.log("credentials", credentials);
        console.log("req", req);
        let user = null;

        // const saltedPasswordToCheck = passwordToSalt(credentials.password)
        // user = await getUserFromDb(credentials.username, credentials.password)

        if (!user) {
          // const saltedPassword = passwordToSalt(credentials?.password)
          // user = await addUserToDb(credentials?.username, saltedPassword)
        }

        if (!user) {
          throw new Error("User was not found and could not be created.");
        }

        return user;
      },
    }),
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
    async signIn({ account, credentials, profile, user }) {
      console.log("account", account);
      console.log("profile", profile);
      console.log("user", user);
      return true;
    },
  },
});
