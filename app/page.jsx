'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'


const Landing = () => {
  const router = useRouter()

  useEffect(() => {
    addEventListener('keydown', () => { handleRouting() })
    return () => {
      removeEventListener('keydown', () => { handleRouting() })
    }
  }, [])

  function handleRouting() {
    router.push('/Game')
  }



  return (
    <div className='flex w-screen h-screen justify-center bg-zinc-950 text-white font-extrabold text-3xl'>

      <div className="fixed top-[35%]" style={{ opacity: 1 }}>
        Press Any Button
      </div>

    </div>
  )
}

export default Landing