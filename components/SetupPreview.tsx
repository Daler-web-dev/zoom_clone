'use client'
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

export default function SetupPreview({ setSetUpCompleted }: { setSetUpCompleted: (arg: boolean) => void }) {
	const [toggle, setToggle] = useState(false)
	const call = useCall()

	if (!call) {
		throw new Error('Error')
	}

	useEffect(() => {
		if (toggle) {
			call.camera.enable()
			call.microphone.enable()
		} else {
			call.camera.disable()
			call.microphone.disable()
		}
	}, [toggle, call?.camera, call?.microphone])

	return (
		<section
			className='flex items-center justify-center w-full h-screen text-center text-white'
		>
			<div>
				<h1 className='font-bold text-2xl' >Setup</h1>
				<VideoPreview />
				<label
					className='flex items-center gap-2 '
					htmlFor="micCam"
				>
					<input
						type="checkbox"
						id='micCam'
						onChange={(e) => setToggle(e.target.checked)}
					/>
					Join with camera and microphone
				</label>
				<div className='flex justify-center items-center gap-5 mt-5'>
					<button
						onClick={() => {
							call.join()

							setSetUpCompleted(true)
						}}
					>
						join meeting
					</button>
					<DeviceSettings />
				</div>
			</div>
		</section>
	)
}
