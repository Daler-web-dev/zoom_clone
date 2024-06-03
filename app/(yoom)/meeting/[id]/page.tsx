'use client'
import { useUser } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function Meeting() {
	const {id} = useParams()
	const {user, isLoaded} = useUser()
	const [] = useState()

	
	return (
		<div>page</div>
	)
}
