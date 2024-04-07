import Navbar from "@/components/navbar";

const DashBoardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
      <div className=" h-full relative" >
            <div className=" hidden text-purple-500 h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900" >
                <div>
                    Hello Slidebar
                </div>
            </div>

            <main className=" md:pl-72" >
                <Navbar />
                {children}
            </main>
      </div>
    )
}
export default DashBoardLayout