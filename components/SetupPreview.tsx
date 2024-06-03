'use client'
import { VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

export default function SetupPreview() {
	const [toggle, setToggle] = useState(false)
	const call = useCall()

	if(!call) return

	useEffect(() => {
		if(toggle) {
			call.camera.enable()
			call.microphone.enable()
		} else {
			call.camera.disable()
			call.microphone.disable()
		}
	}, [toggle, call?.camera, call?.microphone])

	return (
		<>
			<h1>Setup</h1>
			<VideoPreview />
			<label htmlFor="micCam">
				<input 
					type="checkbox" 
					id='micCam'
					onChange={(e) => setToggle(e.target.checked)}
				/>
				Join with camera and microphone
			</label>
		</>
	)
}
