import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const users = sqliteTable("users", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    role: text("role").notNull().default("user"),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const products = sqliteTable("products", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    category: text("category").notNull(),
    stock: integer("stock").notNull().default(0),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const activities = sqliteTable("activities", {
    id: text("id").primaryKey(),
    action: text("action").notNull(),
    productId: text("product_id").references(() => products.id, { onDelete: 'cascade' }),
    userId: text("user_id").references(() => users.id),
    timestamp: integer("timestamp", { mode: "timestamp" }).notNull(),
});

export const productsRelations = relations(products, ({ many }) => ({
    activities: many(activities),
}));

export const activitiesRelations = relations(activities, ({ one }) => ({
    product: one(products, {
        fields: [activities.productId],
        references: [products.id],
    }),
    user: one(users, {
        fields: [activities.userId],
        references: [users.id],
    }),
}));
