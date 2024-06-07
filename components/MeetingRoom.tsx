"use client"
import { CallControls, CallParticipantsList, CallStatsButton, CallingState, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function MeetingRoom() {
    const route = useRouter()

    return (
        <section
            className='flex justify-center w-full h-screen text-center text-white'
        >
            <CallControls />
            <section className='flex flex-row-reverse w-screen'>
                <aside className='right-0 w-[20% flex flex-col gap-5 p-10'>
                    <div className="aside_box h-[100%] bg-[#484747] p-10 rounded-[20px]">
                    <CallParticipantsList onClose={() => route.push('/')} />
                    </div>
                </aside>

                <div className="screens w-[80%] p-10 flex">
                    <PaginatedGridLayout/>
                    {/* <SpeakerLayout participantsBarPosition="left" /> */}
                </div>
            </section>
            <CallStatsButton />
        </section>
    )
}
