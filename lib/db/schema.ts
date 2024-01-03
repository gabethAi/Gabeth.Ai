import {
  int,
  timestamp,
  mysqlTable,
  primaryKey,
  varchar,
  longtext,
  boolean,
  json,
} from "drizzle-orm/mysql-core";

import type { AdapterAccount } from "@auth/core/adapters";

export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    fsp: 3,
  }).defaultNow(),
  image: varchar("image", { length: 255 }),
  createdat: timestamp("createdat", { mode: "date", fsp: 3 })
    .defaultNow()
    .notNull(),
  username: varchar("username", { length: 255 }),
  hashedpassword: varchar("hashedpassword", { length: 255 }),
  isActive: boolean("isActive").default(true), // new field
});

export type User = typeof users.$inferSelect; // return type when queried

export const chats = mysqlTable("chat", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  userId: varchar("userId", { length: 255 })
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  path: varchar("path", { length: 255 }).notNull(),
  sharePath: varchar("sharePath", { length: 255 }).notNull(),
});

export type Chat = typeof chats.$inferSelect; // return type when queried

export const messages = mysqlTable("message", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  chatId: varchar("chatId", { length: 255 })
    .references(() => chats.id)
    .notNull(),
  parentId: varchar("parentId", { length: 255 }).$type<string | null>(),
  role: varchar("role", { length: 120 })
    .notNull()
    .$type<"function" | "user" | "system" | "assistant">(),
  content: longtext("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  childMessages: json("childMessages").$type<any[] | null>().default(null),
});

export type Message = typeof messages.$inferSelect;

export const reactions = mysqlTable("reaction", {
  id: int("id").autoincrement().primaryKey(),
  messageId: varchar("messageId", { length: 255 })
    .references(() => messages.id)
    .notNull(),
  userId: varchar("userId", { length: 255 })
    .references(() => users.id)
    .notNull(),
  type: varchar("type", {
    length: 50,
  })
    .notNull()
    .$type<"like" | "dislike">(),
  feedback: longtext("feedback"),
});

export type Reaction = typeof reactions.$inferSelect; // return type when queried

export const accounts = mysqlTable(
  "account",
  {
    userId: varchar("userId", { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: varchar("refresh_token", { length: 255 }),
    access_token: varchar("access_token", { length: 255 }),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: varchar("id_token", { length: 2048 }),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = mysqlTable("session", {
  sessionToken: varchar("sessionToken", {
    length: 255,
  })
    .notNull()
    .primaryKey(),
  userId: varchar("userId", {
    length: 255,
  })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", {
      length: 255,
    }).notNull(),
    token: varchar("token", {
      length: 255,
    }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);
