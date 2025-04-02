'use client'

import React from 'react'
import { useEffect } from 'react'
import { setTimeout } from 'timers'
import { useRouter } from 'next/navigation'

const Loading = () => {
    const router = useRouter()
    useEffect(() => {
        animation()
        if (isEverythingFineCheck()) {
            setTimeout(() => {
                router.push('/Local')
            }, 2000)
        }
    })

    function isEverythingFineCheck() {
        if (localStorage.getItem('P1CharIndex') && localStorage.getItem('P2CharIndex') && localStorage.getItem('mode')) {
            if (!(parseInt(localStorage.getItem('P1CharIndex')) <= 14) && !(parseInt(localStorage.getItem('P1CharIndex')) >= 0) && !(parseInt(localStorage.getItem('P2CharIndex')) <= 14) && !(parseInt(localStorage.getItem('P2CharIndex')) >= 0)) {
                return false
            }
            if (!((localStorage.getItem('mode') == 'lc') || (localStorage.getItem('mode') == 'pr') || (localStorage.getItem('mode') == 'sp')(localStorage.getItem('mode') == 'ol'))) {
                return false
            }
        }
        return true
    }

    const animation = () => {
        requestAnimationFrame(animation)
    }

    return (
        <div className="w-screen h-screen bg-black overflow-hidden" >

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