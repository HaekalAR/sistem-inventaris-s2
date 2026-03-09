import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddProductDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<button variant="outline" className={`bg-white py-2 px-4 text-[#202020] font-bold rounded-md border border-white hover:cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300`}>Add Product</button>} />
        <DialogOverlay className="backdrop-blur-md bg-black/40" />
        <DialogContent className="sm:max-w-lg bg-[#12121E] border border-[#202020a8] p-7 font-jbm">
          <DialogHeader>
            <DialogTitle className={`text-white text-2xl font-medium`}>Add Product</DialogTitle>
            <DialogDescription className={`text-gray-300 text-base`}>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1"  className={`text-gray-300 text-lg font-medium`}>Product Name</Label>
              <input id="name-1" name="name" placeholder="Dakimakura" defaultValue="" className="border border-gray-600 rounded-sm focus:outline-0 px-4 py-3 w-full text-gray-400 font-medium text-base" />
            </Field>
            <Field>
              <Label htmlFor="username-1" className={`text-gray-300 text-lg font-medium`}>Quantity</Label>
              <input id="username-1" name="username" placeholder="350" defaultValue="" className="border border-gray-600 rounded-sm focus:outline-0 px-4 py-3 w-full text-gray-400 font-medium text-base" />
            </Field>
            <Field>
              <label htmlFor="username-1" className={`text-gray-300 text-lg font-medium`}>Category</label>
              <input type="text" id="category" name="category" placeholder="Food & Drinks" className="border border-gray-600 rounded-sm focus:outline-0 px-4 py-3 w-full text-gray-400 font-medium text-base" required/>
            </Field>
          </FieldGroup>
          <DialogFooter className={`bg-[#12121E] text-gray-300 border-t border-gray-800`}>
            <DialogClose render={<button variant="outline" className={`text-red-600 border border-red-600 hover:bg-transparent hover:text-red-600 bg-tranparent hover:cursor-pointer rounded-md px-4 py-2`}>Cancel</button>} />
            <button type="submit" className={`bg-white py-2 px-4 text-[#202020] font-bold rounded-md border border-white hover:cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300`}>Add Product</button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
