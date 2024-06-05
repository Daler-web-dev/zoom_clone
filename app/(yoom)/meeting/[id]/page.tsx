'use client'
import SetupPreview from '@/components/SetupPreview'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { Call, StreamCall, StreamTheme, VideoPreview, useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Meeting() {
	const { id } = useParams()
	
	const { user, isLoaded } = useUser()
	
	const {call, isCallLoading} = useGetCallById(id)
	
	console.log({isCallLoading, isLoaded});
	

	if(!isLoaded || isCallLoading) return <h1>Loading...</h1>

	return (
		<StreamCall call={call}>
			<StreamTheme>
				<SetupPreview/>
			</StreamTheme>
		</StreamCall>
	)
}
