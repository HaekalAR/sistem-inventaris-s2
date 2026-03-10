import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

if (!process.env.TURSO_DATABASE_URL) {
    throw new Error('TURSO_DATABASE_URL is not defined in environment variables');
}

if (!process.env.TURSO_AUTH_TOKEN) {
    throw new Error('TURSO_AUTH_TOKEN is not defined in environment variables');
}

export default defineConfig({
    schema: './lib/db/schema.js',
    out: './drizzle',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
    },
});
