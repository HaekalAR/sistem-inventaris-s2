"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { addProduct } from "@/lib/actions/products"
import { useActionState, useEffect, useState } from "react"

export function AddProductDialog() {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(addProduct, null);

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<button variant="outline" className={`bg-white md:py-2 md:px-4 px-2 py-1.5 text-[#202020] font-bold md:rounded-md rounded-sm border border-white hover:cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300 md:text-base text-xs`}>Add Product</button>} />
      <DialogOverlay className="backdrop-blur-md bg-black/40" />
      <DialogContent className="sm:max-w-lg bg-[#12121E] border border-[#202020a8] p-7 font-jbm">
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle className={`text-white text-2xl font-medium`}>Add Product</DialogTitle>
            <DialogDescription className={`text-gray-300 text-base`}>
              Add a new item to your inventory.
            </DialogDescription>
          </DialogHeader>

          {state?.error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-md text-sm my-4">
              {state.error}
            </div>
          )}

          <FieldGroup className="space-y-4 my-6">
            <Field>
              <Label htmlFor="name" className={`text-gray-300 text-lg font-medium`}>Product Name</Label>
              <input id="name" name="name" placeholder="Dakimakura" className="bg-[#1D1D29] border border-gray-600 rounded-sm focus:outline-0 px-4 py-3 w-full text-gray-200 font-medium text-base" required />
            </Field>
            <Field>
              <Label htmlFor="stock" className={`text-gray-300 text-lg font-medium`}>Quantity</Label>
              <input type="number" id="stock" name="stock" placeholder="350" className="bg-[#1D1D29] border border-gray-600 rounded-sm focus:outline-0 px-4 py-3 w-full text-gray-200 font-medium text-base" required />
            </Field>
            <Field>
              <Label htmlFor="category" className={`text-gray-300 text-lg font-medium`}>Category</Label>
              <input type="text" id="category" name="category" placeholder="Apparel" className="bg-[#1D1D29] border border-gray-600 rounded-sm focus:outline-0 px-4 py-3 w-full text-gray-200 font-medium text-base" required />
            </Field>
          </FieldGroup>
          <DialogFooter className={`bg-[#12121E] text-gray-300 border-t border-gray-800 pt-6`}>
            <DialogClose render={<button type="button" variant="outline" className={`text-red-500 border border-red-500/30 hover:bg-red-500/10 hover:cursor-pointer rounded-md px-4 py-2`}>Cancel</button>} />
            <button
              type="submit"
              disabled={isPending}
              className={`bg-white py-2 px-4 text-[#202020] font-bold rounded-md border border-white hover:cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300 disabled:opacity-50`}
            >
              {isPending ? "Adding..." : "Add Product"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
