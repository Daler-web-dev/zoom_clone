import { SignIn } from '@clerk/nextjs';
import React from 'react'

export default function Page() {
    return (
        <main 
            className='w-full h-screen flex items-center justify-center'
        >
            <SignIn />
        </main>
    )
}
