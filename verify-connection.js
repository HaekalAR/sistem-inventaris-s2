import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './lib/db/schema.js';
import { count, sum, desc } from 'drizzle-orm';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    console.error("Missing DB environment variables");
    process.exit(1);
}

const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client, { schema });

async function verify() {
    try {
        console.log("Checking DB Connection and Queries...");

        const [productCountRes] = await db.select({ value: count() }).from(schema.products);
        console.log("Product Count:", productCountRes.value);

        const [stockSumRes] = await db.select({ value: sum(schema.products.stock) }).from(schema.products);
        console.log("Total Stock:", stockSumRes.value);

        const latestActivities = await db.query.activities.findMany({
            limit: 5,
            orderBy: [desc(schema.activities.timestamp)],
            with: {
                product: true
            }
        });
        console.log("Latest Activities Count:", latestActivities.length);

        console.log("Verification successful!");
    } catch (error) {
        console.error("Verification failed:", error);
    } finally {
        process.exit();
    }
}

verify();
