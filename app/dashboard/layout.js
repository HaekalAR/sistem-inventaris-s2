"use client";
import { BsFillGridFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { FaBox } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    return (
        <div className="bg-[#12121E] flex min-h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-[#1D1D29] text-white p-6 flex flex-col gap-6 justify-between">
                <div>

                    <h1 className="text-2xl font-bold font-poppins mb-9">
                        Dashboard
                    </h1>

                    <nav className="flex flex-col gap-3 font-jbm">
                        <Link
                            href="/dashboard"
                            className={`p-2 rounded flex gap-2 transition-all duration-300 items-center ${pathname === "/dashboard"
                                ? "bg-gray-100 text-[#202020] font-bold"
                                : "hover:bg-[#12121E]"
                                }`}
                        >
                            <BsFillGridFill />
                            <p>Overview</p>
                        </Link>

                        <Link
                            href="/dashboard/products"
                            className={`p-2 rounded flex gap-2 transition-all duration-300 items-center ${pathname === "/dashboard/products"
                                ? "bg-gray-100 text-[#202020] font-bold"
                                : "hover:bg-[#12121E]"
                                }`}
                        >
                            <FaBox />
                            <p>Products</p>
                        </Link>
                    </nav>
                </div>
                <div>
                    <button
                        className="w-full text-white bg-[#12121E] border border-[#12121E] transition-all duration-300 hover:cursor-pointer hover:border-gray-500 rounded-sm font-jbm text-lg flex gap-2 items-center hover:bg-transparent px-4 py-2"
                    >
                        <IoLogOut className="text-lg" />
                        <p>Logout</p>
                    </button>
                </div>

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