'use client'

import React, { useReducer, useRef } from 'react'
import { useEffect } from 'react'
import { setTimeout } from 'timers'
import { useRouter } from 'next/navigation'

const Loading = () => {
    const router = useRouter()
    useEffect(() => {
        animation()
        if (isEverythingFineCheck()) {
            setTimeout(() => {
                if (localStorage.getItem('mode') == "lc") {
                    router.push("/Local")
                }
                if (localStorage.getItem('mode') == "ol") {
                    HandleOnlineRouting()
                }
                if (localStorage.getItem('mode') == "pr") {
                    router.push("/Practice")
                }
                if (localStorage.getItem('mode') == "sp") {
                    router.push("/Single")
                }
            }, 5000)
        }
        else {
            alert('Change in Local Data Detected')
        }
    })

    const Arenas = useRef([
        {
            name: "Chinatown",
            imgUrl: "/ArenaSelect/ChinaTown.gif",
            nameUrl: "/ArenaSelect/Unknown_Arena_Name.png",
        },
        {
            name: "Fallen Castle",
            imgUrl: "/ArenaSelect/Fallen_Castle.gif",
            nameUrl: "/ArenaSelect/Unknown_Arena_Name.png",
        },
        {
            name: "Chambers",
            imgUrl: "/ArenaSelect/Chamber_Of_Vampires.gif",
            nameUrl: "/ArenaSelect/Name/Chamber_Of_Vampires_Name.png",
        },
        {
            name: "Colloseum",
            imgUrl: "/ArenaSelect/Coloseum.gif",
            nameUrl: "/ArenaSelect/Name/Coloseum.png",
        },
        {
            name: "Ferry",
            imgUrl: "/ArenaSelect/Ferry.gif",
            nameUrl: "/ArenaSelect/Name/Ferry.png",
        },
        {
            name: "Waterfall",
            imgUrl: "/ArenaSelect/WaterFall.gif",
            nameUrl: "/ArenaSelect/Name/WaterFall.png",
        },
        {
            name: "Mars",
            imgUrl: "/ArenaSelect/Mars.gif",
            nameUrl: "/ArenaSelect/Unknown_Arena_Name.png",
        },
        {
            name: "Tournament",
            imgUrl: "/ArenaSelect/Tournament.gif",
            nameUrl: "/ArenaSelect/Unknown_Arena_Name.png",
        },
        {
            name: "Warzone",
            imgUrl: "/ArenaSelect/Warzone.gif",
            nameUrl: "/ArenaSelect/Unknown_Arena_Name.png",
        }])

    async function HandleOnlineRouting(){
        const GameRes = await fetch('http://192.168.1.2:2000/login/Map' , {method:"POST" , headers:{'Content-Type':'application/json'} , body:JSON.stringify({Game:localStorage.getItem('Game')}) })
        const result = await GameRes.json()
        localStorage.setItem("imgUrl", result.MapIndex)
        localStorage.setItem("name", Arenas.current[result.MapIndex].name)
        router.push("/Online")
    }

    function isEverythingFineCheck() {
        if (localStorage.getItem('P1CharIndex') && localStorage.getItem('P2CharIndex') && localStorage.getItem('mode')) {
            if (!(parseInt(localStorage.getItem('P1CharIndex')) <= 14) && !(parseInt(localStorage.getItem('P1CharIndex')) >= 0) && !(parseInt(localStorage.getItem('P2CharIndex')) <= 14) && !(parseInt(localStorage.getItem('P2CharIndex')) >= 0)) {
                return false
            }
            if (!((localStorage.getItem('mode') == 'lc') || (localStorage.getItem('mode') == 'pr') || (localStorage.getItem('mode') == 'sp') || (localStorage.getItem('mode') == 'ol'))) {
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

            <div className="w-[200px] h-[30px] absolute bottom-8 left-8 rounded-[100%] bg-[#ffffff13]">

            </div>
            <div className="w-[200px] h-[200px] absolute bottom-8 left-8">
                <img src="/ModeSelect/Logo.png" alt="None" className="w-[200px] absolute bottom-0 left-0" />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Loading