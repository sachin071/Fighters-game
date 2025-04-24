'use client';
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

    const router = useRouter();


    const ArenaIndex = useRef({
        Selected: false,
        index: 11
    })

    const bgm = useRef(false)

    const [ArenaIndexState, setArena] = useState()

    var newindex = ArenaIndex.current.index

    const handleKeyDown = (event) => {
        if (!ArenaIndex.current.Selected) {
            if (event.keyCode == 65) { // a
                newindex = ((ArenaIndex.current.index - 1) % 8) + 8
                ArenaIndex.current.index = newindex
            }
            if (event.keyCode == 68) { // d
                newindex = ((ArenaIndex.current.index + 1) % 8) + 8
                ArenaIndex.current.index = newindex
            }
            if (event.keyCode == 13) {
                localStorage.setItem("imgUrl", Arenas.current[ArenaIndex.current.index].imgUrl)
                localStorage.setItem("name", Arenas.current[ArenaIndex.current.index].name)
                router.push('/loading')
            }
        }
        setArena({ ...ArenaIndex.current })
    }

    useEffect(() => {
        bgm.current.play()
        bgm.current.volume = 0.2;
        const lastTime = localStorage.getItem("last_utx")
        const currTime = Date.now()
        const td = currTime - parseInt(lastTime, 10)
        const playtime = parseFloat(localStorage.getItem("Bgm_Timer")) + td / 1000
        bgm.current.currentTime = playtime
        addEventListener('keydown', handleKeyDown)
        return () => {
            removeEventListener('keydown', handleKeyDown)
        }
    }, [])

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
        },
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
        },
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
        },
    ])

    return (
        <div className="w-screen h-screen bg-zinc-700 flex">
            <div className=" fixed w-full h-full bg-black object-cover flex">
                <img src={Arenas.current[ArenaIndex.current.index].imgUrl} className=" fixed left-[0px] h-full w-full object-contain fixed bottom-[0px]" alt="" />
            </div>
            <div className="h-[100px] fixed z-[5] w-[90%] bg-red-500 left-[5%] bottom-[12%] flex flex-row items-center justify-center">
                {
                    Arenas.current.map((items, index) => {
                        if ((index >= ArenaIndex.current.index - 4) && (index <= ArenaIndex.current.index + 4)) {


                            if ((Arenas.current[index].name == "Coming Soon") && (index == ArenaIndex.current.index)) {
                                return (
                                    <div className="h-full w-[11%] flex object-cover border-[3px] border-blue-500" key={index}> <div className="flex justify-center items-center bg-[#00000066] w-full text-white"> Coming Soon</div> </div>
                                )
                            }

                            if (Arenas.current[index].name == "Coming Soon") {
                                return (
                                    <div className="h-full w-[11%] flex object-cover" key={index}> <div className="flex justify-center items-center bg-[#00000066] w-full text-white"> Coming Soon</div> </div>
                                )
                            }

                            if (index == ArenaIndex.current.index) {
                                return (
                                    <div className="h-full w-[11%] flex object-cover border-[3px] border-blue-500" key={index}> <img src={items.imgUrl} className="object-cover flex 2-full" /> </div>
                                )
                            }
                            else {
                                return (
                                    <div className="h-full w-[11%] flex object-cover" key={index}> <img src={items.imgUrl} className="object-cover flex 2-full" /> </div>
                                )
                            }
                        }


                    })
                }
            </div>

            <audio src={`${localStorage.getItem('genre')}/PlayerSelect/Player_Select_BGM.mp3`} ref={bgm} loop />
        </div>
    );
}