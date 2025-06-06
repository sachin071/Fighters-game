'use client';
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setTimeout } from "timers";




export default function Home() {

    const userData = useRef({
        name: "",
        username: ""
    })


    const Bgm = useRef(false)

    const ValidationMode = useRef('')

    const musicIndex = useRef(0)
    const [musicIndexState, setMusicIndex] = useState(musicIndex.current)
    useEffect(() => {
        if (window.innerHeight > window.innerWidth) {
            alert("The game isnt designed for the mobile Devices and is unplayable please try refraining from playing")
        }
        if (!localStorage.getItem("token")) {
            router.push('/Auth')
        }
        if (localStorage.getItem("token")) {

            handleValidation()

        }

        Bgm.current.play()
        Bgm.current.volume = 0.1
        Selection.current.volume = 0.1
        change.current.volume = 0.1

        var item = localStorage.getItem('genre')
        if (!localStorage.getItem('genre')) {
            musicIndex.current = 0
            localStorage.setItem('genre', musicData.current[musicIndex.current])
            Bgm.current.src = `${localStorage.getItem('genre')}/ModeSelect/Opening.mp3`
            Bgm.current.load()
            Bgm.current.onloadeddata = () => {
                Bgm.current.currentTime = 0;
                Bgm.current.play()
            };
        }
        if (item == "Metal") {
            musicIndex.current = 0

        }
        else if (item == "Jazz") {
            musicIndex.current = 1
        }
        else if (item == "lowfi") {
            musicIndex.current = 2
        }

        setMusicIndex(musicIndex.current)


    }, [])

    async function handleValidation() {
        const token = localStorage.getItem("token")
        if (token == "Offline_Mode") {
            ValidationMode.current = "Offline_Mode"
        }
        else {
            const res = await fetch('http://192.168.1.198:2000/login/Validate', { method: "POST", headers: { 'Accept': '*/*', 'Content-type': 'application/json' }, body: JSON.stringify({ "token": token }) })
            const data = await res.json()
            console.log(data)
            if (data.status == "Invalid token") {
                router.push('/Auth')
            }
            else {
                userData.current.name = data.name
                userData.current.username = data.username
            }
        }


    }


    const musicData = useRef(["Metal", "Jazz", "lowfi"])



    const router = useRouter();
    const [modeIndex, setMode] = useState(4)
    const modeIndexRef = useRef(4)
    const change = useRef(false);
    const Selection = useRef(false);

    const modes = useRef([
        {
            name: "Local Multiplayer",
            route: '/Local'
        },
        {
            name: "Online Multiplayer",
            route: "/Online"
        },
        {
            name: "Single Player",
            route: "/Single"
        },
        {
            name: "Practice Mode",
            route: "/Practice"
        }
        ,
        {
            name: "Local Multiplayer",
            route: '/Local'
        },
        {
            name: "Online Multiplayer",
            route: "/Online"
        },
        {
            name: "Single Player",
            route: "/Single"
        },
        {
            name: "Practice Mode",
            route: "/Practice"
        }
        ,
        {
            name: "Local Multiplayer",
            route: '/Local'
        },
        {
            name: "Online Multiplayer",
            route: "/Online"
        },
        {
            name: "Single Player",
            route: "/Single"
        },
        {
            name: "Practice Mode",
            route: "/Practice"
        }

    ])

    var newIndex = 0

    const handleKeyDown = (event) => {
        if (event.keyCode == 87) { //w
            change.current.currentTime = 0;
            change.current.play()
            newIndex = ((modeIndexRef.current - 1) % 4) + 4
            modeIndexRef.current = newIndex
        }

        if (event.keyCode == 83) { //s
            change.current.currentTime = 0;
            change.current.play()
            newIndex = ((modeIndexRef.current + 1) % 4) + 4
            modeIndexRef.current = newIndex
        }

        if (event.keyCode == 65) { //a
            Bgm.current.pause()
            musicIndex.current = musicIndex.current - 1
            setMusicIndex(musicIndex.current)
            if (musicIndex.current < 0) {
                musicIndex.current = 2
            }
            if (musicIndex.current > 2) {
                musicIndex.current = 0
            }
            localStorage.setItem('genre', musicData.current[musicIndex.current])
            Bgm.current.src = `${localStorage.getItem('genre')}/ModeSelect/Opening.mp3`
            Bgm.current.load()
            Bgm.current.onloadeddata = () => {
                Bgm.current.currentTime = 0;
                Bgm.current.play()
            };
        }

        if (event.keyCode == 68) { //d
            Bgm.current.pause()
            musicIndex.current = musicIndex.current + 1
            setMusicIndex(musicIndex.current)
            if (musicIndex.current < 0) {
                musicIndex.current = 2
            }
            if (musicIndex.current > 2) {
                musicIndex.current = 0
            }
            localStorage.setItem('genre', musicData.current[musicIndex.current])
            Bgm.current.src = `${localStorage.getItem('genre')}/ModeSelect/Opening.mp3`
            Bgm.current.load()
            Bgm.current.onloadeddata = () => {
                Bgm.current.currentTime = 0;
                Bgm.current.play()
            };
        }

        if (event.keyCode == 13) {
            Selection.current.play()
            if (modeIndexRef.current == 4) {
                localStorage.setItem("mode", 'lc')
                setTimeout(() => { router.push('/playerSelect/local'); }, 800)
            }
            if (modeIndexRef.current == 5) {
                if (ValidationMode.current == "Offline_Mode") {
                    alert("Mode Unvailable Please Login to Continue in Online Mode")
                    localStorage.removeItem('token')
                    router.push('/Auth')
                }
                else {
                    localStorage.setItem("mode", 'ol')
                    setTimeout(() => { router.push('/playerSelect/online'); }, 800)
                }
            }
            if (modeIndexRef.current == 6) {
                localStorage.setItem("mode", 'sp')
                setTimeout(() => { router.push('/playerSelect/single'); }, 800)
            }
            if (modeIndexRef.current == 7) {
                localStorage.setItem("mode", 'pr')
                setTimeout(() => { router.push('/playerSelect/practice'); }, 800)
            }

        }
        setMode(modeIndexRef.current)
    }




    useEffect(() => {
        localStorage.removeItem("mode")
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])


    return (
        <div className="w-screen h-screen bg-zinc-950 flex justify-center">
            <img src="/ModeSelect/Logo_Bg.jpg" className="fixed w-[1000px] flex" />
            <img src="/ModeSelect/Logo.png" className="h-[200px] z-[10] fixed top-[300px]" />
            <div className="w-full h-[15%] fixed bottom-[15%] left-[0px] z-[10]  ">
                {
                    modes.current.map((item, index) => {
                        if ((index >= modeIndexRef.current - 1) && (index <= modeIndexRef.current + 1)) {
                            if (index == modeIndexRef.current) {
                                return (<div key={index}> <div className="h-[8px] bg-gradient-to-r from-[#ffffff11] via-white to-[#ffffff11] w-[70%] mx-auto"></div>
                                    <div className="bg-gradient-to-r from-transparent via-zinc-100 to-transparent w-[70%] mx-auto  ">

                                        <div className="z-[100] text-center text-5xl font-bold m-auto text-rose-600 flex flex-row items-center justify-center">
                                            <div className="flex flex-1">

                                            </div>
                                            <div className=" flex flex-3 items-center justify-center">
                                                {item.name}
                                            </div>

                                            <div className=" flex flex-1 justify-end ">
                                                <div className="border-[1px] border-zinc-600 rounded-lg text-2xl mr-[50px] w-[100px] h-[40px] flex items-center justify-center bg-gradient-to-r from-[#222222ff] via-[#444444ff] to-[#222222ff] text-gray-400 ">
                                                    Enter
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[8px] bg-gradient-to-r from-[#ffffff11] via-white to-[#ffffff11] w-[70%] mx-auto"></div>
                                </div>)
                            }
                            else {
                                return (
                                    <div className="z-[100] text-center text-3xl font-bold opacity-[70%] m-auto text-orange-600 flex flex-row items-center justify-center w-[70%]" key={index}>
                                        <div className="flex flex-1">

                                        </div>
                                        <div className=" flex flex-3 items-center justify-center">
                                            {item.name}
                                        </div>

                                        <div className=" flex flex-1 justify-end ">
                                            <div className="border-[1px] border-zinc-600 rounded-lg text-2xl mr-[50px] w-[40px] h-[30px] flex items-center justify-center bg-gradient-to-r from-[#222222ff] via-[#444444ff] to-[#222222ff] text-gray-400 my-[10px]">
                                                {index > modeIndexRef.current ? "S" : "W"}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        }

                    })
                }



            </div>
            <div className="fixed right-[25px] top-[25px] flex flex-col">
                <div className="flex flex-row">
                    <div className="flex h-[100px] w-[50px] justify-center items-center">

                        <div className="border-[1px] border-zinc-600 rounded-lg text-2xl  w-[40px] h-[30px] flex items-center justify-center bg-gradient-to-r from-[#222222ff] via-[#444444ff] to-[#222222ff] text-gray-400">
                            A
                        </div>

                    </div>
                    <div className="flex w-[100px] h-[100px]font-extrabold text-lg justify-center items-center">
                        <img src={'/Music.png'} />
                    </div>
                    <div className="flex h-[100px] w-[50px] justify-center items-center">
                        <div className="border-[1px] border-zinc-600 rounded-lg text-2xl  w-[40px] h-[30px] flex items-center justify-center bg-gradient-to-r from-[#222222ff] via-[#444444ff] to-[#222222ff] text-gray-400 " >
                            D
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center font-lg font-bold text-">
                            {localStorage.getItem('genre').toUpperCase()}
                </div>

            </div>

            <audio ref={change} src={'/ModeSelect/Change.mp3'} />
            <audio ref={Selection} src={'/ModeSelect/Selected.mp3'} />
            <audio src={`/${localStorage.getItem('genre')}/ModeSelect/Opening.mp3`} ref={Bgm} loop />
        </div>
    );
}
