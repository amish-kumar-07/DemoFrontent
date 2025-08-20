// lib/dbFunctions.ts
"use server";

import { db } from "@/db/index";
import { users } from "@/db/schema";

export async function saveUser(asin: string) {
  try {
    await db.insert(users).values({
      name: "Amish",
      age: 18,
      email: asin,
    });

    return { success: true };
  } catch (err) {
    console.error("DB insert error:", err);
    return { success: false };
  }
}

export async function getUsers() {
  try {
    const allUsers = await db.select().from(users);
    return allUsers;
  } catch (err) {
    console.error("DB fetch error:", err);
    return [];
  }
}
