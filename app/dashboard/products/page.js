import { AddProductDialog } from "@/components/ui/products/add-product-dialog";
import { FaClockRotateLeft } from "react-icons/fa6";
import { getProducts } from "@/lib/actions/products";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DeleteProductButton } from "@/components/ui/products/delete-product-button";

export const metadata = {
    title: "Product Management",
    description: "Manage your inventory items, track stock levels, and organize products by category.",
};

const Products = async () => {
    const session = await getSession();
    if (!session) {
        redirect("/login");
    }

    const products = await getProducts();

    const formatTime = (date) => {
        return new Date(date).toLocaleString();
    };

    return (
        <div className="w-full min-h-screen bg-[#12121E] flex flex-col">

            {/* Header */}
            <div className="md:p-7 p-4 flex items-center justify-between">
                <h1 className="font-jbm text-white font-bold text-2xl">Products</h1>
                <p className="font-jbm text-gray-300 font-medium text-md uppercase">{session.user.name}</p>
            </div>

            <div className="w-full h-fit md:px-7 px-4 md:mb-7 mb-4">
                <div className="w-full bg-[#1D1D29] flex items-center justify-between md:text-base text-sm rounded-lg font-jbm text-white p-4 border border-[#1f1f2e]">
                    <p className="text-gray-400">Manage your inventory</p>
                    <AddProductDialog />
                </div>
            </div>

            <div className="md:px-7 px-4 md:mb-7 mb-4 flex-1">
                <div className="w-full bg-[#1D1D29] text-white p-4 rounded-lg flex flex-col md:gap-7 gap-4 border border-[#1f1f2e]">
                    <span className="w-full flex items-center justify-between opacity-70">
                        <h3 className="font-jbm text-lg font-medium text-gray-400">All Products</h3>
                        <FaClockRotateLeft className="text-xl" />
                    </span>
                    <div className="flex flex-col gap-3 font-jbm overflow-y-auto md:max-h-[65vh] max-h-[65vh]">
                        <div className="grid grid-cols-5 gap-2 py-3 border-b mb-4 border-[#2e2e46] md:text-base text-sm text-gray-500 font-bold">
                            <p>Name</p>
                            <p>Category</p>
                            <p>Stock</p>
                            <p className="text-right">Time</p>
                            <p className="text-right">Actions</p>
                        </div>
                        {products.length > 0 ? products.map((product, index) => (
                            <div
                                key={product.id}
                                className={`grid grid-cols-5 gap-2 p-3 items-center rounded-sm ${index % 2 === 0 ? "bg-[#242432] hover:bg-[#252536]" : "bg-[#1D1D29] hover:bg-[#181827]"
                                    }`}
                            >
                                <span className="text-gray-200 font-medium md:text-base text-xs">{product.name}</span>
                                <span className="text-gray-400 md:text-base text-xs">{product.category}</span>
                                <span className="text-gray-300 md:text-base text-xs">{product.stock}</span>
                                <span className="text-gray-500 md:text-base text-xs text-right">{formatTime(product.updatedAt)}</span>
                                <div className="flex justify-end gap-2">
                                    <DeleteProductButton productId={product.id} />
                                </div>
                            </div>
                        )) : (
                            <div className="text-center text-gray-500 py-10 italic">No products found. Add one to get started!</div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products