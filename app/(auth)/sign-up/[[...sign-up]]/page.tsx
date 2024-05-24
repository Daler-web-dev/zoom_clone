import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <main
      className='w-full h-screen flex items-center justify-center'
    >
      <SignUp />
    </main>
  )
}
