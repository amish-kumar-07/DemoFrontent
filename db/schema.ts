import { serial,integer , pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
