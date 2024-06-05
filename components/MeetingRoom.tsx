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
            <section className='flex w-screen'>
                <aside className='bg-green-500 left-0 w-[20%] p-10'>
                    <CallParticipantsList onClose={() => route.push('/')} />
                </aside>

                <div className="screens bg-yellow-400 w-[80%] p-10">
                    <PaginatedGridLayout />
                </div>
            </section>
            <CallStatsButton />
        </section>
    )
}

{/* <SpeakerLayout participantsBarPosition="left" /> */}