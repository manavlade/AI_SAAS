import Navbar from "@/components/navbar";
import SlideBar from "@/components/slidebar";

const DashBoardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
      <div className=" h-full relative" >
            <div className=" hidden text-purple-500 h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900" >
                <div>
                    <SlideBar />
                </div>
            </div>

            <main className=" md:pl-72" >
                <Navbar />
                {children}
            </main>
      </div>
    )
}
// yaha firse visit karna hai tu check how did it flex without using flex 
export default DashBoardLayout