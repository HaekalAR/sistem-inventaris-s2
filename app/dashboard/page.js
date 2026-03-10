import { FaBox } from "react-icons/fa6";
import { FaTable } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { db } from "@/lib/db";
import { products, activities } from "@/lib/db/schema";
import { count, sum, desc, eq } from "drizzle-orm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Dashboard Overview",
    description: "Monitor your inventory statistics and latest activities in real-time.",
};

const Dashboard = async () => {
    const session = await getSession();
    if (!session) {
        redirect("/login");
    }

    // Fetch Stats
    const [productCountRes] = await db.select({ value: count() }).from(products);
    const [stockSumRes] = await db.select({ value: sum(products.stock) }).from(products);

    // Categories count (manual distinct approach)
    const allProducts = await db.select({ category: products.category }).from(products);
    const categoriesCount = new Set(allProducts.map(p => p.category)).size;

    // Fetch Latest Activities with item names
    // Note: In a real app we might join with products, but here we'll just fetch raw activities for now 
    // or join if drizzle supports it easily here
    const latestActivities = await db.query.activities.findMany({
        limit: 5,
        orderBy: [desc(activities.timestamp)],
        with: {
            product: true
        }
    });

    const formatTime = (date) => {
        const now = new Date();
        const diff = Math.floor((now - new Date(date)) / 1000);
        if (diff < 60) return `${diff} sec ago`;
        if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hour ago`;
        return new Date(date).toLocaleDateString();
    };

    return (
        <div className="w-full min-h-screen bg-[#12121E] flex flex-col">

            {/* Header */}
            <div className="md:p-7 p-4 flex items-center justify-between">
                <h1 className="font-jbm text-white font-bold text-2xl">Overview</h1>
                <p className="font-jbm text-gray-300 font-medium text-md uppercase">{session.user.name}</p>
            </div>

            {/* Grid cards */}
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-7 gap-4 md:px-7 px-4">
                <div className="bg-[#1D1D29] text-white p-4 rounded-lg border border-[#1f1f2e]">
                    <span className="w-full flex items-center justify-between opacity-70">
                        <h3 className="font-jbm font-medium text-lg text-gray-400">Products Total</h3>
                        <FaBox className="text-xl" />
                    </span>
                    <p className="font-jbm text-5xl text-center font-bold px-2 py-7">{productCountRes?.value || 0}</p>
                </div>

                <div className="bg-[#1D1D29] text-white p-4 rounded-lg border border-[#1f1f2e]">
                    <span className="w-full flex items-center justify-between opacity-70">
                        <h3 className="font-jbm font-medium text-lg text-gray-400">All Stock</h3>
                        <FaWarehouse className="text-xl" />
                    </span>
                    <p className="font-jbm text-5xl text-center font-bold px-2 py-7">{stockSumRes?.value || 0}</p>
                </div>

                <div className="bg-[#1D1D29] text-white p-4 rounded-lg border border-[#1f1f2e]">
                    <span className="w-full flex items-center justify-between opacity-70">
                        <h3 className="font-jbm font-medium text-lg text-gray-400">Products Category</h3>
                        <FaTable className="text-xl" />
                    </span>
                    <p className="font-jbm text-5xl text-center font-bold px-2 py-7">{categoriesCount}</p>
                </div>

            </div>
            <div className="flex-1 md:p-7 p-4">
                <div className="w-full h-full bg-[#1D1D29] text-white p-4 rounded-lg border border-[#1f1f2e] flex flex-col md:gap-7 gap-4">
                    <span className="w-full flex items-center justify-between opacity-70">
                        <h3 className="font-jbm text-lg font-medium text-gray-400">Latest Activity</h3>
                        <FaClockRotateLeft className="text-xl" />
                    </span>
                    <div className="flex flex-col gap-3 md:text-base text-xs font-jbm">
                        {latestActivities.length > 0 ? latestActivities.map((activity, index) => (
                            <div
                                key={activity.id}
                                className={`grid grid-cols-3 p-3 rounded-sm ${index % 2 === 0 ? "bg-[#242432] hover:bg-[#252536]" : "bg-[#1D1D29] hover:bg-[#181827]"
                                    }`}
                            >
                                <span className="text-gray-300 font-medium">{activity.action}</span>
                                <span className="text-gray-400 italic">{activity.product?.name || "System"}</span>
                                <span className="text-gray-500 text-right">{formatTime(activity.timestamp)}</span>
                            </div>
                        )) : (
                            <div className="text-center text-gray-500 py-10 italic">No activity yet.</div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard