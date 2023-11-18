import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);

export const User = pgTable(
  "User",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    createdat: timestamp("createdat").defaultNow().notNull(),
    username: text("username"),
    hashedpassword: text("hashedpassword").notNull(),
  },
  (users) => {
    return {
      uniqueEmail: uniqueIndex("unique_email").on(users.email),
    };
  }
);

export const Conversation = pgTable("Conversation", {
  id: serial("id").primaryKey(),
  userId: integer("userId")
    .references(() => User.id)
    .notNull(),
});

export const Message = pgTable("Message", {
  id: serial("id").primaryKey(),
  conversationId: integer("conversationId")
    .references(() => Conversation.id)
    .notNull(),
  type: text("type").notNull(),
  text: text("text").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  reactions: integer("reactions"),
  feedback: text("feedback"),
});

export const Reaction = pgTable("Reaction", {
  id: serial("id").primaryKey(),
  messageId: integer("messageId")
    .references(() => Message.id)
    .notNull(),
  type: text("type").notNull(),
  count: integer("count").default(0).notNull(),
});
