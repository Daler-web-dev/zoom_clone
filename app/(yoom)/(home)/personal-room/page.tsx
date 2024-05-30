"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { GoPlus } from "react-icons/go";


export default function Home() {

    const [show, setShow] = useState<boolean>(false);

    function showHide() {
        setShow(prevShow => !prevShow);
    }


    return (
        <main>
            <div className="content pl-[300px] pt-[50px]">
                <h1 className="text-white text-3xl font-bold">Personal Meeting Room</h1>

                <div className="room_settings flex flex-col gap-[32px] pt-[50px]">
                    <span className="flex items-center gap-[30px]">
                        <p className="room_setting font-medium text-xl text-[#C9DDFF] w-[110px]">Topic:</p>
                        <h1 className="room_info text-white text-xl font-bold">JS Mastery’s Personal Meeting Room</h1>
                    </span>
                    <span className="flex items-center gap-[30px]">
                        <p className="room_setting font-medium text-xl text-[#C9DDFF] w-[110px]">Meeting ID:</p>
                        <h1 className="room_info text-white text-xl font-bold">324 531 3821</h1>
                    </span>
                    <span className="flex items-center gap-[30px]">
                        <p className="room_setting font-medium text-xl text-[#C9DDFF] w-[110px]">Passcode:</p>
                        <h1 className="password room_info text-white text-xl font-bold w-[100px]">{show ? '12345678' : '********'}</h1>

                        <button className="show" onClick={showHide}>
                            {show ? <FaEyeSlash color='#0E78F9' size={25} /> : <FaEye color='#0E78F9' size={25} />}
                        </button>
                    </span>
                    <span className="flex items-center gap-[30px]">
                        <p className="room_setting font-medium text-xl text-[#C9DDFF] w-[110px]">Invite Link:</p>
                        <h1 className="room_info text-white text-xl font-bold">https://us93web.qoom.us/345672?pwd=3f2uiui3h4un134if </h1>
                    </span>
                </div>

                <div className="buttons pt-[50px] flex gap-2">
                    <Button className='bg-[#0E78F9] hover:bg-[#0E78F9]'>
                        Start the meeting
                    </Button>
                    <Button className='bg-[#252A41] flex items-center gap-1.5 hover:bg-[#252A41]'>
                        <FiCopy />
                        <span>Copy Invitation</span>
                    </Button>
                    <Button className='bg-none border-2 border-[#252A41] flex items-center gap-1.5'>
                        <FaRegEdit />
                        <span>Edit</span>
                    </Button>
                    <Button className='bg-none border-2 border-[#252A41] flex items-center gap-1.5'>
                        <MdDeleteOutline size={17} />
                        <span>Delete</span>
                    </Button>
                </div>
            </div>

            <div className="hr w-full h-1 bg-[#1C1F2E] my-[50px]"></div>

            <div className="content pl-[300px]">
                <Button className='bg-[#252A41] flex items-center gap-1.5 hover:bg-[#252A41]'>
                    <GoPlus size={28} />
                    <span>Create a new room</span>
                </Button>
            </div>
        </main>
    )
}