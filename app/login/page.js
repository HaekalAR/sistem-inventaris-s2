"use client";

import Link from "next/link";
import { login } from "@/lib/actions/auth";
import { useActionState } from "react";

const Login = () => {
    const [state, formAction, isPending] = useActionState(login, null);

    return (
        <div className="w-full h-screen bg-[#12121E] text-white font-jbm md:p-7 flex items-center justify-center">
            <form action={formAction} className="w-full max-w-md flex flex-col gap-4 bg-[#1D1D29] border border-[#1f1f2e] rounded-lg p-7 shadow-md shadow-[#0c0a11]">
                <div className="flex flex-col gap-2 pb-4">
                    <h2 className="text-white font-poppins font-semibold md:text-4xl">Welcome Back!</h2>
                    <p className="text-gray-300 font-jbm text-md">Fill your credential below to login to you account.</p>
                </div>

                {state?.error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-md text-sm">
                        {state.error}
                    </div>
                )}

                <div className="flex flex-col gap-1">
                    <label className="text-gray-300 font-semibold text-lg">Email</label>
                    <input type="email" id="email" name="email" placeholder="johnDoe@isekai.com" className="bg-[#242432] border border-gray-600 rounded-sm focus:outline-0 px-4 py-2 w-full text-gray-200 font-medium" required />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-300 font-semibold text-lg">Password</label>
                    <input type="password" id="password" name="password" placeholder="***" className="bg-[#242432] border border-gray-600 rounded-sm focus:outline-0 px-4 py-2 w-full text-gray-200 font-medium" required />
                </div>
                <div className="text-center text-gray-400">
                    <p><Link href="/register" className="underline text-blue-500">Register</Link> if you do not have an account yet</p>
                </div>
                <button
                    disabled={isPending}
                    className="bg-white py-2 px-4 text-[#202020] font-bold rounded-md border border-white hover:cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login;