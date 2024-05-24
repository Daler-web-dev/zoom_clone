import React from "react"



type IBlock = {
    src: string
    title: string
    desc: string
    bg: string
}

 const  SettingBlocks: React.FC<IBlock> = ({src, title, desc, bg}) => {
    return (
        <div 
            className={`w-[260px] h-[260px] rounded-[14px] flex justify-between flex-col items-start py-6 px-5 cursor-pointer`}
            style={{
                background: bg
            }}
        >
            <div className="w-[56px] h-[56px] rounded-[10px] bg-white/35 flex justify-center items-center">
                <img className="w-[36px] h-[36px]" src={src} alt="icons" />
            </div>
            <div className=" flex flex-col justify-center items-start">
                <h3 className="text-white font-bold text-2xl">{title}</h3>
                <p className="text-[#ECF0FF] text-lg">{desc}</p>
            </div>
        </div>
    )
}

export default SettingBlocks