import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center md:mx-160">
        <h1 className="font-poppins text-5xl font-bold text-center text-[#07092a]">Inventory <br/> Management System</h1>
        <p className="font-jbm text-center font-medium text-[#14174e]">A simple Inventory Management System made using NextJS, TailwindCSS, with JavaScript to manage your inventory, product, and stock efficiently. Try using the dashboard below!</p>
        <Link href={'/dashboard'} className="w-fit bg-[#222982] px-7 py-2 rounded-md font-jbm font-medium mt-4">Manage Inventory</Link>
        <div className="w-full text-center fixed bottom-0 bg-[#07092a]">
          <p className="font-jbm text-center text-xs py-2 font-medium text-gray-400">by Haekal Abdillah Ramadhan (G1A025004), <br/> Abdul Vaiz Vahry Iskandar (G1A025063)</p>
        </div>
      </div>
    </div>
  )
}

export default Home;