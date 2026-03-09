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
            <div className="p-7 flex items-center justify-between">
                <h1 className="font-jbm text-white font-bold text-2xl">Products</h1>
                <p className="font-jbm text-gray-300 font-medium text-md">Endmin</p>
            </div>

            <div className="w-full h-fit px-7 mb-7">
                <div className="w-full bg-[#1D1D29] flex items-center justify-between rounded-lg font-jbm text-white p-4">
                    <p>Manage your inventory</p>
                    <AddProductDialog />
                </div>
            </div>
            
            <div className="px-7">
                <div className="w-full h-full bg-[#1D1D29] text-white p-4 rounded-lg flex flex-col gap-7">
                    <span className="w-full flex items-center justify-between">
                        <h3 className="font-jbm text-lg font-medium">All Products</h3>
                        <FaClockRotateLeft className="text-xl" />
                    </span>
                    <div className="flex flex-col gap-3 font-jbm">
                    <div className="grid grid-cols-5 p-3 border-b mb-4 border-[#2e2e46]">
                        <p>Action</p>
                        <p>Product Name</p>
                        <p>Category</p>
                        <p className="text-right">Time Updated</p>
                        <p className="text-right">Action Button</p>
                    </div>
                        {activities.map((activity, index) => (
                            <div
                                key={activity.id}
                                className={`grid grid-cols-5 p-3 items-center rounded-sm ${index % 2 === 0 ? "bg-[#242432] hover:bg-[#252536]" : "bg-[#1D1D29] hover:bg-[#181827]"
                                    }`}
                            >

                                <span className="text-gray-300">{activity.action}</span>
                                <span className="text-gray-300">{activity.item}</span>
                                <span className="text-gray-300">{activity.category}</span>
                                <span className="text-gray-400 text-right">{activity.time}</span>
                                <span className="text-gray-400 text-right">
                                    <button className="bg-yellow-600 py-1.5 px-4 text-gray-100 text-xs font-medium rounded-md border border-yellow-600 hover:cursor-pointer hover:bg-transparent hover:text-yellow-600 transition-all duration-300 mr-4">Edit</button>
                                    <button className="bg-red-600 py-1.5 px-4 text-gray-100 text-xs font-bold rounded-md border border-red-600 hover:cursor-pointer hover:bg-transparent hover:text-red-600 transition-all duration-300">Remove</button>
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