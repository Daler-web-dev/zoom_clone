"use client"
import Image from "next/image"
import Link from "next/link"
import { RiHome5Line } from "react-icons/ri";
import { GrSchedulePlay } from "react-icons/gr";
import { usePathname } from "next/navigation";
import { GoPlus } from "react-icons/go";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdPreview } from "react-icons/md";



function NavigateLinks() {
    const pathname = usePathname()
    

    return (
        <nav className="w-full flex flex-col gap-3" >
            <a
                href={"/"}
                className={`w-full rounded-lg flex items-center gap-4 text-[#C9DDFF] p-4 ${pathname === "/" && "bg-[#0E78F9] text-white"} `}
            >
                <RiHome5Line
                    size={28}
                />
                <span>Home</span>
            </a>
            <a
                href={"/upcoming-meetings"}
                className={`w-full rounded-lg flex items-center gap-4 text-[#C9DDFF] p-4 ${pathname === "/upcoming-meetings" && "bg-[#0E78F9] text-white"} `}
            >
                <GrSchedulePlay
                    size={28}
                />
                <span>Upcoming</span>
            </a>
            <a
                href={"/previous-meetings"}
                className={`w-full rounded-lg flex items-center gap-4 text-[#C9DDFF] p-4 ${pathname === "/previous-meetings" && "bg-[#0E78F9] text-white"} `}
            >
                <MdPreview
                    size={28}
                />
                <span>Previous</span>
            </a>
            <a
                href={"/recordings"}
                className={`w-full rounded-lg flex items-center gap-4 text-[#C9DDFF] p-4 ${pathname === "/recordings" && "bg-[#0E78F9] text-white"} `}
            >
                <HiOutlineVideoCamera
                    size={28}
                />
                <span>Recordings</span>
            </a>
            <Link
                href={"/personal-room"}
                className={`w-full rounded-lg flex items-center gap-4 text-[#C9DDFF] p-4 ${pathname === "/personal-room" && "bg-[#0E78F9] text-white"} `}
            >
                <GoPlus
                    size={30}
                />
                <span>Personal room</span>
            </Link>
        </nav>
    )
}



export default NavigateLinks