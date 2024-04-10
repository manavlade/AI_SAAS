"use client"

//Global Imports
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// Personal Imports
import { cn } from "@/lib/utils";
import { 
    Code, 
    ImageIcon, 
    LayoutDashboard, 
    MessageSquare, 
    Music, 
    Settings, 
    VideoIcon 
} from "lucide-react";

import { usePathname } from "next/navigation";


const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: " text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: " text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: " text-pink-700",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: " text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: " text-emarald-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: " text-green-700",
    },
    
    {
        label: "Settings ",
        icon: Settings,
        href: "/settings",
    },
    
]

const SlideBar = () => {
    const pathName = usePathname();
    return (
        <>
            <div className=" space-y-4 flex flex-col py-4 h-full bg-[#111827] text-white" >
                <div className=" px-3 py-2 flex-1" >
                    <Link href="/dashboard" className=" flex items-center pl-3 mb-14" >
                        <div className=" relative w-8 h-8 mr-4" >
                            <Image
                                fill
                                alt="logo"
                                src="/logo.png"
                            />
                        </div>
                        <h1 className={cn(" text-2xl font-bold",
                            montserrat.className
                        )} >
                            Genius
                        </h1>
                    </Link>
                    <div className=" space-y-1" >
                        {routes.map((route) => (
                            <Link
                            href={route.href}
                            key={route.href}
                            //yaha text small thoda chota tha isiliye usko lg kiya varna text-sm use karo if any issue
                            className= { cn (" text-lg flex justify-start p-3 w-full font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathName  === route.href ? " text-white bg-white/10" : " text-zinc-500"
                             )}
                             // yaha ye route.href ke baad jo classname dala hai uske karan upun jis route pe hai
                             // wo route highlight hai aur wo or condition baaki ke part ko light karta hai
                            >
                            <div className=" flex items-center flex-1" >
                                <route.icon className= {cn ("h-5 w-5 mr-5", route.color)} />
                                {route.label}
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlideBar;