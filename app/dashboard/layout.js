"use client";
import { BsFillGridFill } from "react-icons/bs";
import { FaBox } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "@/components/ui/auth/logout-button";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="bg-[#12121E] flex min-h-screen">
      {/* Sidebar */}
      <aside className="md:w-64 w-8 bg-[#1D1D29] text-white md:p-6 flex flex-col gap-6 justify-between">
        <div>
          <h1 className="text-2xl md:flex hidden font-bold font-poppins mb-9">
            Dashboard
          </h1>

          <nav className="flex flex-col md:items-stretch items-center justify-center gap-3 font-jbm">
            <Link
              href="/dashboard"
              className={`p-2 rounded md:flex hidden gap-2 transition-all duration-300 items-center ${pathname === "/dashboard"
                ? "bg-gray-100 text-[#202020] font-bold"
                : "hover:bg-[#12121E]"
                }`}
            >
              <BsFillGridFill />
              <p>Overview</p>
            </Link>
            <Link
              href="/dashboard"
              className={`p-1 w-fit mt-1 md:hidden flex rounded-xs ${pathname === "/dashboard"
                ? "bg-gray-100 text-[#202020] font-bold"
                : "hover:bg-[#12121E]"
                }`}
            >
              <BsFillGridFill />
            </Link>

            <Link
              href="/dashboard/products"
              className={`p-2 rounded md:flex hidden gap-2 transition-all duration-300 items-center ${pathname === "/dashboard/products"
                ? "bg-gray-100 text-[#202020] font-bold"
                : "hover:bg-[#12121E]"
                }`}
            >
              <FaBox />
              <p>Products</p>
            </Link>
            <Link
              href="/dashboard/products"
              className={`p-1 w-fit mt-1 md:hidden flex rounded-xs ${pathname === "/dashboard/products"
                ? "bg-gray-100 text-[#202020] font-bold"
                : "hover:bg-[#12121E]"
                }`}
            >
              <FaBox />
            </Link>
          </nav>
        </div>
        <div className="flex justify-center flex-col items-center">
          <LogoutButton variant="full" />
          <LogoutButton variant="icon" />
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <main className="">{children}</main>
      </div>
    </div>
  );
}
