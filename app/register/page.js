import { Link } from "lucide-react";

const Register = () => {
    return (
        <div className="w-full h-screen bg-[#12121E] text-white font-jbm md:p-7 flex items-center justify-center">
            <form className="w-1/3 flex flex-col gap-4 bg-[#1D1D29] border border-[#1f1f2e] rounded-lg p-7 shadow-md shadow-[#0c0a11]">
                <div className="flex flex-col gap-2 pb-4">
                    <h2 className="text-white font-poppins font-semibold md:text-4xl">Welcome Aboard!</h2>
                    <p className="text-gray-300 font-jbm font-normal text-base">Just a little more things to fill before you can manage your effective inventory, your credentials please!</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-300 font-semibold text-lg">Username</label>
                    <input type="text" id="username" name="username" placeholder="johnDoe@isekai.com" className="border border-gray-600 rounded-sm focus:outline-0 px-4 py-2 w-full text-gray-400 font-medium" required/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-300 font-semibold text-lg">Email</label>
                    <input type="email" id="email" name="email" placeholder="johnDoe@isekai.com" className="border border-gray-600 rounded-sm focus:outline-0 px-4 py-2 w-full text-gray-400 font-medium" required/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-300 font-semibold text-lg">Password</label>
                    <input type="password" id="password" name="password" placeholder="***" className="border border-gray-600 rounded-sm focus:outline-0 px-4 py-2 w-full text-gray-400 font-medium" required/>
                </div>
                <div className="text-center text-gray-400">
                    <p><a href="/login" className="underline text-blue-500">Login</a> if you do not have an account yet</p>
                </div>
                <button className="bg-white py-2 px-4 text-[#202020] font-bold rounded-md border border-white hover:cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300">Register</button>
            </form>
        </div>
    )
}

export default Register;