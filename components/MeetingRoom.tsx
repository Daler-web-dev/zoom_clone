"use client"
import { CallControls, CallParticipantsList, CallStatsButton, CallingState, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function MeetingRoom() {
    const route = useRouter()

    return (
        <section
            className='flex items-center justify-center w-full h-screen text-center text-white'
        >
            <CallControls/>
            <CallParticipantsList onClose={() => route.push('/')} />
            {/* <SpeakerLayout participantsBarPosition="left" /> */}
            <PaginatedGridLayout/>
            <CallStatsButton/>
        </section>
    )
}
