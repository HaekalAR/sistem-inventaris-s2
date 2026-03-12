import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLogger from "./clientLogger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Sistem Inventaris S2 - Modern Inventory Management",
    template: "%s | Sistem Inventaris S2"
  },
  description: "A premium Inventory Management System built with Next.js and Turso DB. Manage products, stock, and activities with ease.",
  keywords: ["inventory", "management", "system", "nextjs", "turso", "drizzle", "stock", "warehouse"],
  authors: [{ name: "Isekai Team" }],
  openGraph: {
    title: "Sistem Inventaris S2",
    description: "Manage your inventory efficiently with our modern dashboard.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLogger/>
        {children}
      </body>
    </html>
  );
}
