"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    return (
        <div className="bg-[#12121E] flex min-h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-[#1D1D29] text-white p-6 flex flex-col gap-6">

                <h1 className="text-2xl font-bold">
                    Dashboard
                </h1>

                <nav className="flex flex-col gap-3 font-jbm">
                    <Link
                        href="/dashboard"
                        className={`p-2 rounded ${pathname === "/dashboard"
                                ? "bg-gray-100 text-[#202020] font-bold"
                                : "hover:bg-gray-800"
                            }`}
                    >
                        Overview
                    </Link>

                    <Link
                        href="/dashboard/products"
                        className={`p-2 rounded ${pathname === "/dashboard/products"
                                ? "bg-gray-100 text-[#202020] font-bold"
                                : "hover:bg-gray-800"
                            }`}
                    >
                        Products
                    </Link>
                </nav>

            </aside>

            {/* Main Area */}
            <div className="flex flex-col flex-1">

                {/* Header */}
                <main className="">
                    {children}
                </main>

            </div>

        </div>
    );
}