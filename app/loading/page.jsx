'use client'

import React from 'react'
import { useEffect } from 'react'
import { setTimeout } from 'timers'
import { useRouter } from 'next/navigation'

const Loading = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/Local')
        }, 2000)
    })

    return (
        <div className="w-screen h-screen bg-black overflow-hidden">

            <div className="w-[200px] h-[30px] absolute bottom-8 right-8 rounded-[100%] bg-[#ffffff13]">

            </div>
            <div className="w-[200px] h-[200px] absolute bottom-8 right-8">
                <img src="/ModeSelect/Logo.png" alt="None" className="w-[200px] absolute bottom-0 right-0" />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Loading