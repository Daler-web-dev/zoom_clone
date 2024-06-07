"use client"
import { cn } from '@/lib/utils'
import { CallControls, CallParticipantsList, SpeakerLayout } from '@stream-io/video-react-sdk'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'


export default function MeetingRoom() {
    const [layout, setLayout] = useState('speaker-left')
    const [showParticipants, setShowParticipants] = useState(false)
    const searchParams = useSearchParams()
    const isPersonalRoom = !!searchParams.get('personal')

    return (
        <section className='w-full h-screen text-white relative pt-4 overflow-hidden'>
            <div className='relative size-full flex items-center justify-center'>
                <div className='flex size-full max-w-[1000px] items-center'>
                    <SpeakerLayout participantsBarPosition={"right"} />
                </div>
                <div className={cn("h-[calc(100vh-86px)] hidden ml-2", { "show-block": showParticipants })}>
                    <CallParticipantsList onClose={() => {
                        setShowParticipants(false)
                    }} />
                </div>
            </div>

            <div className='fixed bottom-0 flex w-full items-center justify-center gap-5'>
                <CallControls />
            </div>
        </section>
    )
}
