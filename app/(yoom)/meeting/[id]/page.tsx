'use client'

import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useGetcallById } from '@/hooks/useGetCallbyId'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import Loader from '@/components/Loader'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function Meeting() {
	const { id } = useParams()
	const { user, isLoaded } = useUser()
	const [isSetupComplete, setIsSetupComplete] = useState(false)
	const { call, isCallLoading } = useGetcallById(id)

	if (!isLoaded || isCallLoading) return <Loader />

	return (
		<main className='h-screen w-full'>
			<StreamCall call={call}>
				<StreamTheme>
					{!isSetupComplete ? (
						<MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
					) : (
						<MeetingRoom />
					)}
				</StreamTheme>
			</StreamCall>
		</main>
	)
}
