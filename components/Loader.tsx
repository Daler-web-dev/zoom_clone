import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <Image src="/icons/loading-circle.png" alt='loading' width={200} height={200}/>
    </div>
  )
}

export default Loader