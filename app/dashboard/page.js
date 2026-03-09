import { FaBox } from "react-icons/fa6";
import { FaTable } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";

const Dashboard = () => {
    const activities = [
        { id: 1, action: "Added Product", item: "Keyboard", time: "2 min ago" },
        { id: 2, action: "Removed Product", item: "Mouse", time: "10 min ago" },
        { id: 3, action: "Updated Stock", item: "Monitor", time: "1 hour ago" },
    ];
    return (
        <div className="w-full min-h-screen bg-[#12121E] flex flex-col">

            {/* Header */}
            <div className="md:p-7 p-4 flex items-center justify-between">
                <h1 className="font-jbm text-white font-bold text-2xl">Overview</h1>
                <p className="font-jbm text-gray-300 font-medium text-md">Endmin</p>
            </div>

            {/* Grid cards */}
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-7 gap-4 md:px-7 px-4">
                <div className="bg-[#1D1D29] text-white p-4 rounded-lg">
                    <span className="w-full flex items-center justify-between">
                        <h3 className="font-jbm font-medium text-lg">Products Total</h3>
                        <FaBox className="text-xl" />
                    </span>
                    <p className="font-jbm text-5xl text-center font-bold px-2 py-7">100</p>
                </div>

                <div className="bg-[#1D1D29] text-white p-4 rounded-lg">
                    <span className="w-full flex items-center justify-between">
                        <h3 className="font-jbm font-medium text-lg">All Stock</h3>
                        <FaWarehouse className="text-xl" />
                    </span>
                    <p className="font-jbm text-5xl text-center font-bold px-2 py-7">100</p>
                </div>

                <div className="bg-[#1D1D29] text-white p-4 rounded-lg">
                    <span className="w-full flex items-center justify-between">
                        <h3 className="font-jbm font-medium text-lg">Products Category</h3>
                        <FaTable className="text-xl" />
                    </span>
                    <p className="font-jbm text-5xl text-center font-bold px-2 py-7">100</p>
                </div>

            </div>
            <div className="flex-1 md:p-7 p-4">
                <div className="w-full h-full bg-[#1D1D29] text-white p-4 rounded-lg flex flex-col md:gap-7 gap-4">
                    <span className="w-full flex items-center justify-between">
                        <h3 className="font-jbm text-lg font-medium">Latest Activity</h3>
                        <FaClockRotateLeft className="text-xl" />
                    </span>
                    <div className="flex flex-col gap-3 md:text-base text-xs font-jbm">
                        {activities.map((activity, index) => (
                            <div
                                key={activity.id}
                                className={`grid grid-cols-3 p-3 rounded-sm ${index % 2 === 0 ? "bg-[#242432] hover:bg-[#252536]" : "bg-[#1D1D29] hover:bg-[#181827]"
                                    }`}
                            >
                                <span className="text-gray-300">{activity.action}</span>
                                <span className="text-gray-300">{activity.item}</span>
                                <span className="text-gray-400 text-right">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard