"use client";

import { deleteProduct } from "@/lib/actions/products";
import { useTransition } from "react";

export function DeleteProductButton({ productId }) {
    const [isPending, startTransition] = useTransition();

    return (
        <button
            disabled={isPending}
            onClick={() => {
                if (confirm("Are you sure you want to remove this product?")) {
                    startTransition(async () => {
                        await deleteProduct(productId);
                    });
                }
            }}
            className="bg-red-600/10 text-red-500 border border-red-500/30 md:py-1.5 py-1 md:px-4 px-2 text-xs font-bold md:rounded-md rounded-sm hover:cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
            {isPending ? "Removing..." : "Remove"}
        </button>
    );
}
