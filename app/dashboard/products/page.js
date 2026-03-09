import { AddProductDialog } from "@/components/ui/products/add-product-dialog";
import { FaBox } from "react-icons/fa6";
import { FaTable } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";

const Products = () => {
    const activities = [
        { id: 1, action: "Added Product", item: "Keyboard", category: "Hardware", time: "2 min ago" },
        { id: 2, action: "Removed Product", item: "Mouse", category: "Hardware", time: "10 min ago" },
        { id: 3, action: "Updated Stock", item: "Monitor", category: "Hardware", time: "1 hour ago" },
    ];
    return (
        <div className="w-full min-h-screen bg-[#12121E] flex flex-col">

            {/* Header */}
            <div className="md:p-7 p-4 flex items-center justify-between">
                <h1 className="font-jbm text-white font-bold text-2xl">Products</h1>
                <p className="font-jbm text-gray-300 font-medium text-md">Endmin</p>
            </div>

            <div className="w-full h-fit md:px-7 px-4 md:mb-7 mb-4">
                <div className="w-full bg-[#1D1D29] flex items-center justify-between md:text-base text-sm rounded-lg font-jbm text-white p-4">
                    <p>Manage your inventory</p>
                    <AddProductDialog />
                </div>
            </div>

            <div className="md:px-7 px-4 md:mb-7 mb-4">
                <div className="w-full bg-[#1D1D29] text-white p-4 rounded-lg flex flex-col md:gap-7 gap-4">
                    <span className="w-full flex items-center justify-between">
                        <h3 className="font-jbm text-lg font-medium">All Products</h3>
                        <FaClockRotateLeft className="text-xl" />
                    </span>
                    <div className="flex flex-col gap-3 font-jbm overflow-y-auto md:max-h-[65vh] max-h-[65vh]">
                        <div className="grid grid-cols-5 py-3 border-b mb-4 border-[#2e2e46] md:text-base text-sm">
                            <p>Action</p>
                            <p className="md:block hidden">Product Name</p>
                            <p className="block md:hidden">Name</p>
                            <p>Category</p>
                            <p className="text-right md:block hidden">Time Updated</p>
                            <p className="text-right block md:hidden">Time</p>
                            <p className="text-right">Action Button</p>
                        </div>
                        {activities.map((activity, index) => (
                            <div
                                key={activity.id}
                                className={`grid grid-cols-5 gap-2 p-1.5 items-center rounded-sm ${index % 2 === 0 ? "bg-[#242432] hover:bg-[#252536]" : "bg-[#1D1D29] hover:bg-[#181827]"
                                    }`}
                            >

                                <span className="text-gray-300 md:text-base text-xs">{activity.action}</span>
                                <span className="text-gray-300 md:text-base text-xs">{activity.item}</span>
                                <span className="text-gray-300 md:text-base text-xs">{activity.category}</span>
                                <span className="text-gray-400 md:text-base text-xs text-right">{activity.time}</span>
                                <span className="text-gray-400 md:text-base text-xs text-right md:flex-row md:justify-end flex flex-col gap-2">
                                    <button className="w-full md:w-fit bg-yellow-600 md:py-1.5 py-1 md:px-4 px-2 text-gray-100 text-xs font-medium md:rounded-md rounded-sm border border-yellow-600 hover:cursor-pointer hover:bg-transparent hover:text-yellow-600 transition-all duration-300 mr-4">Edit</button>
                                    <button className="bg-red-600 md:w-fit w-full md:py-1.5 py-1 md:px-4 px-2 text-gray-100 text-xs font-bold md:rounded-md rounded-sm border border-red-600 hover:cursor-pointer hover:bg-transparent hover:text-red-600 transition-all duration-300">Remove</button>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products