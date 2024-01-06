import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
// import Apple from "next-auth/providers/apple"
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./lib/actions";

export const config = {
  // adapter: DrizzleAdapter(db),
  // debug: true,
  // session: {
  //   strategy: "database",
  // },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // const data = LoginSchema.parse({ email, password });

        const user = await getUserByEmail(email as string);

        if (user) {
          if (bcrypt.compareSync(password as string, user.password as string)) {
            return Promise.resolve({
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
            });
          }

          throw new Error("Invalid Credentials");
        }

        throw new Error("There is no account associated, please sign up");
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user",
  },
  callbacks: {
    signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true;
      }

      return false;
    },
    session: async ({ session, token, user }) => {
      if (session.user) {
        const { id, name, email, image } = session.user;

        session.user = {
          id: token.sub ?? id,
          name,
          email,
          image,
        };
      }

      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
