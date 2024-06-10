'use client'
import MeetingRoom from '@/components/MeetingRoom'
import SetupPreview from '@/components/SetupPreview'
import { useGetCallById } from '@/hooks/useGetcallbyId'
import { useUser } from '@clerk/nextjs'
import { Call, StreamCall, StreamTheme, VideoPreview, useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function Meeting() {
	const [setCompleted, setSetUpCompleted] = useState<boolean>(false)
	const { id } = useParams()


	const { user, isLoaded } = useUser()
	const { call, isCallLoading } = useGetCallById(id)

	if (!isLoaded || isCallLoading) return <h1>Loading...</h1>

	return (
		<StreamCall call={call}>
			<StreamTheme>
				{
					!setCompleted ?
						<SetupPreview setSetUpCompleted={setSetUpCompleted} /> :
						<MeetingRoom />
				}
			</StreamTheme>
		</StreamCall>
	)
}
