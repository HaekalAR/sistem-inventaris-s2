"use server";

import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { login as setSession, logout as destroySession } from "../auth";
import { redirect } from "next/navigation";

export async function register(prevState, formData) {
    const name = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
        return { error: "All fields are required" };
    }

    // Check if user exists
    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    if (existingUser) {
        return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = crypto.randomUUID();

    try {
        await db.insert(users).values({
            id: userId,
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
        });

        await setSession({ id: userId, name, email, role: "user" });
    } catch (error) {
        console.error("Register error:", error);
        return { error: "Failed to create account" };
    }

    redirect("/dashboard");
}

export async function login(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return { error: "All fields are required" };
    }

    const user = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    if (!user) {
        return { error: "Invalid email or password" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return { error: "Invalid email or password" };
    }

    await setSession({ id: user.id, name: user.name, email: user.email, role: user.role });

    redirect("/dashboard");
}

export async function logout() {
    await destroySession();
    redirect("/login");
}
