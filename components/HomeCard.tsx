// import React from "react"



// type IBlock = {
//     src: string
//     title: string
//     desc: string
//     bg: string
// }

//  const  SettingBlocks: React.FC<IBlock> = ({src, title, desc, bg}) => {
//     return (
//         <div     
//             style={{background: bg}}
//             className={`w-[260px] h-[260px] rounded-[14px] flex justify-between flex-col items-start py-6 px-5 cursor-pointer`}>
//             <div className="w-[56px] h-[56px] rounded-[10px] bg-white/35 flex justify-center items-center">
//                 <img className="w-[36px] h-[36px]" src={src} alt="icons" />
//             </div>
//             <div className=" flex flex-col justify-center items-start">
//                 <h3 className="text-white font-bold text-2xl">{title}</h3>
//                 <p className="text-[#ECF0FF] text-lg">{desc}</p>
//             </div>
//         </div>
//     )
// }

// export default SettingBlocks

'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-500 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="flex flex-col gap-2 text-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;