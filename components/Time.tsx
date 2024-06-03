"use client"

import { useState } from "react"



function TimeComponent() {
    const [date, setDate] = useState<Date>()

    setInterval(() => {
        const time = new Date()
        setDate(time)
    }, 1000);


    return (
        <div className="w-full h-[400px] bg-[url('/images/timeBg.png')] bg-cover bg-no-repeat flex justify-start items-center pl-10 rounded-lg">
            <div className="h-full flex justify-between items-start flex-col text-[#ECF0FF] py-[40px]">
                <div className="rounded py-4 px-5 bg-white/5 font-normal text-base">Upcoming Meeting at: <span>12:00 PM</span></div>
                <div className="flex justify-center items-start flex-col gap-2.5 ">
                    {date ? (<h2 className="font-extrabold text-[72px] leading-[72px] text-white">{date?.toString().split(" ")[4].slice(0, length - 3)}</h2>
                    ) : (
                        <div className="w-[200px] h-[70px] bg-white/5 rounded"></div>
                    )
                    }
                    {date ? (<p className="text-[#C9DDFF] text-2xl font-medium"><span>{date?.toString().split(" ")[0]}</span>, <span>{date?.toString().split(" ")[2]}</span> <span>{date?.toString().split(" ")[1]}</span> <span>{date?.toString().split(" ")[3]}</span></p>) : (
                        <div className="w-[210px] h-[30px] bg-white/5 rounded"></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TimeComponent