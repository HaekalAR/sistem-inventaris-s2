"use client";

import { IoLogOut } from "react-icons/io5";
import { logout } from "@/lib/actions/auth";
import { useTransition } from "react";

export function LogoutButton({ variant = "full" }) {
    const [isPending, startTransition] = useTransition();

    const handleLogout = () => {
        if (confirm("Are you sure you want to logout?")) {
            startTransition(async () => {
                await logout();
            });
        }
    };

    if (variant === "icon") {
        return (
            <button
                disabled={isPending}
                onClick={handleLogout}
                className="text-white bg-[#12121E] border border-[#12121E] transition-all duration-300 hover:cursor-pointer hover:border-gray-500 rounded-sm text-lg flex flex-col md:hidden items-center justify-center hover:bg-transparent m-1 p-1 disabled:opacity-50"
            >
                <IoLogOut className="text-lg" />
            </button>
        );
    }

    return (
        <button
            disabled={isPending}
            onClick={handleLogout}
            className="w-full text-white bg-[#12121E] border border-[#12121E] transition-all duration-300 hover:cursor-pointer hover:border-gray-500 rounded-sm font-jbm text-lg md:flex hidden gap-2 items-center hover:bg-transparent px-4 py-2 disabled:opacity-50"
        >
            <IoLogOut className="text-lg" />
            <p>{isPending ? "Logging out..." : "Logout"}</p>
        </button>
    );
}
