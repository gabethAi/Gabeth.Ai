import { type Message } from "ai";

export interface Chat extends Record<string, any> {
  id: string;
  title: string;
  createdAt: Date;
  userId: string;
  path: string;
  messages: Message[];
  sharePath?: string;
}

export interface User extends Record<string, any> {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  createdAt: Date;
  username: string;
  hashedPassword: string;
}

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string;
    }
>;
