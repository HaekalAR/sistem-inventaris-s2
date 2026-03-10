import Link from "next/link";

export const metadata = {
  title: "Welcome | Sistem Inventaris S2",
  description: "Efficiently manage your inventory with our state-of-the-art dashboard.",
};

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#12121E] flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center md:mx-160 mx-4">
        <h1 className="font-poppins md:text-5xl text-3xl font-bold text-center text-white">Inventory <br /> Management System</h1>
        <p className="font-jbm text-center font-normal md:text-base text-sm text-gray-300">A simple Inventory Management System made using NextJS, TailwindCSS, with JavaScript to manage your inventory, product, and stock efficiently. Try using the dashboard below!</p>
        <Link href={'/dashboard'} className="w-fit hover:text-white border border-white bg-white hover:bg-transparent transition-all duration-300 text-[#202020] md:px-7 md:py-2 md:text-base text-sm px-4 py-2 rounded-md font-jbm font-medium mt-4">Manage Inventory</Link>
        <div className="w-full fixed bottom-0 bg-[#1D1D29] md:flex hidden items-center justify-between">
          <p className="font-jbm text-xs px-7 py-2 text-gray-400">Made with love by <a href="https://github.com/HaekalAR" target="_blank" className="underline text-ray-100">Haekal Abdillah Ramadhan (G1A025004)</a> & <a href="https://github.com/DemuraAIdev" target="_blank" className="underline text-ray-100">Abdul Vaiz Vahry Iskandar (G1A025063)</a></p>
          <p className="px-7 py-2 font-jbm text-gray-400 text-xs font-normal">© Isekai System 2026</p>
        </div>
        <div className="w-full fixed bottom-0 bg-[#1D1D29] md:hidden">
          <p className="font-jbm text-center text-xs px-7 py-2 text-gray-400">Made with love by <a href="https://github.com/HaekalAR" target="_blank" className="underline text-ray-100">Haekal.A.R</a> & <a href="https://github.com/DemuraAIdev" target="_blank" className="underline text-ray-100">A.Vaiz.V.I</a></p>
        </div>
      </div>
    </div>
  )
}

export default Home;