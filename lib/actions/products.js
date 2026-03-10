"use server";

import { db } from "../db";
import { products, activities } from "../db/schema";
import { eq, desc } from "drizzle-orm";
import { getSession } from "../auth";
import { revalidatePath } from "next/cache";

export async function addProduct(prevState, formData) {
    const session = await getSession();
    if (!session) return { error: "Not authenticated" };

    const name = formData.get("name");
    const stock = parseInt(formData.get("stock"));
    const category = formData.get("category");

    if (!name || isNaN(stock) || !category) {
        return { error: "All fields are required" };
    }

    const productId = crypto.randomUUID();

    try {
        await db.insert(products).values({
            id: productId,
            name,
            stock,
            category,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        // Log activity
        await db.insert(activities).values({
            id: crypto.randomUUID(),
            action: "Added Product",
            productId,
            userId: session.user.id,
            timestamp: new Date(),
        });

        revalidatePath("/dashboard");
        revalidatePath("/dashboard/products");
        return { success: true };
    } catch (error) {
        console.error("Add product error:", error);
        return { error: "Failed to add product" };
    }
}

export async function deleteProduct(productIdOrFormData) {
    const session = await getSession();
    if (!session) return { error: "Not authenticated" };

    let productId;
    if (typeof productIdOrFormData === "string") {
        productId = productIdOrFormData;
    } else {
        productId = productIdOrFormData.get("productId");
    }

    if (!productId) {
        return { error: "Product ID is required" };
    }

    try {
        // Delete related activities first to avoid foreign key constraint errors
        await db.delete(activities).where(eq(activities.productId, productId));

        // Now delete the product
        await db.delete(products).where(eq(products.id, productId));

        // Log the "Removed Product" activity
        await db.insert(activities).values({
            id: crypto.randomUUID(),
            action: "Removed Product",
            productId: null,
            userId: session.user.id,
            timestamp: new Date(),
        });

        revalidatePath("/dashboard");
        revalidatePath("/dashboard/products");
        return { success: true };
    } catch (error) {
        console.error("Delete product error:", error);
        return { error: "Failed to delete product" };
    }
}

export async function getProducts() {
    return await db.query.products.findMany({
        orderBy: [desc(products.updatedAt)],
    });
}
