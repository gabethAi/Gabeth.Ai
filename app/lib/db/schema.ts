import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
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

export type User = typeof users.$inferSelect; // return type when queried

export const conversations = pgTable("conversations", {
  id: serial("id").primaryKey(),
  userId: integer("userId")
    .references(() => users.id)
    .notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  conversationId: integer("conversationId")
    .references(() => conversations.id)
    .notNull(),
  type: text("type").notNull(),
  text: text("text").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  reactions: integer("reactions"),
  feedback: text("feedback"),
});

export const reactions = pgTable("reactions", {
  id: serial("id").primaryKey(),
  messageId: integer("messageId")
    .references(() => messages.id)
    .notNull(),
  type: text("type").notNull(),
  count: integer("count").default(0).notNull(),
});
