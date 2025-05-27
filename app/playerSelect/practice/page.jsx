'use client';

import { useRouter } from "next/navigation";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { setTimeout } from "timers";


const Local = () => {

    // const userData = useRef({})
    // userData.current = recallData()
    // console.log(userData.current)
    // setTimeout(() => {
    //     clearData()
    // }, 1000)





    useEffect(() => {
        if (!localStorage.getItem("mode")) {
            router.push('/');
        }
        if (localStorage.getItem("P1CharIndex") && localStorage.getItem("P2CharIndex")) {
            localStorage.removeItem("P1CharIndex");
            localStorage.removeItem("P2CharIndex");
        }
    }, [])

    const router = useRouter();



    const P1Details = useRef({
        selectionIndex: 1,
        selected: false
    });
    const [P1DetailsState, setP1Details] = useState({ ...P1Details.current })

    const playerChange = useRef(false);
    const bgm = useRef(false);


    useEffect(() => {
        bgm.current.play();
        bgm.current.volume = 0.2;
        if (localStorage.getItem('genre') == "Metal") {
            bgm.current.currentTime = 12.4
        }

    }, [])

    const P2Details = useRef({
        selectionIndex: 13,
        selected: false
    });

    const [P2DetailsState, setP2Details] = useState({ ...P2Details.current })
    var newindex = 0

    function handleChangeAudio() {
        playerChange.current.currentTime = 0;
        playerChange.current.play();
        playerChange.current.volume = 0.1;
    }

    function handleKeyDown(event) {

        if (!P1Details.current.selected) {
            if (event.keyCode == 65) { // a
                newindex = Math.max(0, P1Details.current.selectionIndex - 1);
                P1Details.current.selectionIndex = newindex
                handleChangeAudio();
            }
            if (event.keyCode == 68) { // d
                newindex = Math.min(14, P1Details.current.selectionIndex + 1) >= 15 ? P1Details.current.selectionIndex : Math.min(14, P1Details.current.selectionIndex + 1)
                P1Details.current.selectionIndex = newindex
                handleChangeAudio();
            }
        }

        if (P1Details.current.selected && !P2Details.current.selected) {
            if (event.keyCode == 65) { // left
                newindex = Math.max(0, P2Details.current.selectionIndex - 1);
                P2Details.current.selectionIndex = newindex
                handleChangeAudio();
            }
            if (event.keyCode == 68) { // right
                newindex = Math.min(14, P2Details.current.selectionIndex + 1) >= 15 ? P2Details.current.selectionIndex : Math.min(14, P2Details.current.selectionIndex + 1)
                P2Details.current.selectionIndex = newindex
                handleChangeAudio();
            }

        }

        if (event.keyCode == 13) {
            if (!P1Details.current.selected) {
                P1Details.current.selected = true
                localStorage.setItem("P1CharIndex", P1Details.current.selectionIndex)
            }
            if (P1Details.current.selected && !P2Details.current.selected) {
                P2Details.current.selected = true
                localStorage.setItem("P2CharIndex", P2Details.current.selectionIndex)
            }

            if (P1Details.current.selected && P2Details.current.selected) {
                setTimeout(() => {
                    localStorage.setItem("last_utx", Date.now().toString())
                    localStorage.setItem("Bgm_Timer", bgm.current.currentTime)
                    router.push("/arenaSelect")
                }, 800)
            }
        }

        if (event.keyCode == 8) {
            if (P1Details.current.selected) {
                P1Details.current.selected = false
                localStorage.removeItem("P1CharIndex")
            }
            if (P1Details.current.selected && P2Details.current.selected) {
                P2Details.current.selected = false
                localStorage.removeItem("P2CharIndex")
            }
        }

        setP1Details({ ...P1Details.current })
        setP2Details({ ...P2Details.current })

    }


    useEffect(() => {
        addEventListener('keydown', handleKeyDown)
        return () => {
            removeEventListener('keydown', handleKeyDown)
        }
    }, [])





    const Characters = useRef(
        [
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            }, {
                name: "Baba Ramdev",
                showcase: "/PlayerSelect/Showcases/Baba_Ramdev.png",
                image: "/PlayerSelect/Baba_Ramdev.png",
                name_img: '/PlayerSelect/PlayerNames/Baba_Ramdev.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Balkrishna",
                showcase: "/PlayerSelect/Showcases/Balkrishna.png",
                image: "/PlayerSelect/Balkrishna.png",
                name_img: '/PlayerSelect/PlayerNames/Balkrishna.png'
            },

            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },

            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },

        ]
    )

    return (
        <div className="bg-stone-950 w-screen h-screen flex flex-col overflow-hidden ">
            <img src={'/PlayerSelect/Images/Background.gif'} className="fixed w-screen object-cover" />
            <div className="fixed w-[30%] h-[80%] bottom-[calc(10%+100px)] left-[10%] bg-gradient-to-t from-blue-600 via-[#0000ff52] to-transparent overflow-hidden  ">
                <img src={Characters.current[P1Details.current.selectionIndex].showcase} alt={Characters.current[P1Details.current.selectionIndex].name} className="object-cover w-full absolute bottom-0 " />
                {(P1DetailsState.selected == true) && <div className="absolute w-full h-[30%] bottom-[5%] flex justify-center font-extrabold text-3xl items-center bg-[#00000044]">
                    Selected
                </div>}
                <img src={Characters.current[P1Details.current.selectionIndex].name_img} alt="Character_Name" className=" absolute left-0 bottom-8 h-[75px]" />
            </div>
            <div className="fixed w-[30%] h-[80%] bottom-[calc(10%+100px)] right-[10%] bg-gradient-to-t from-green-600 via-[#00ff0052] to-transparent overflow-hidden ">
                <img src={Characters.current[P2Details.current.selectionIndex].showcase} alt={Characters.current[P2Details.current.selectionIndex].name} className="object-cover w-full absolute bottom-0  scale-x-[-1]" />
                {(P2DetailsState.selected == true) && <div className="absolute w-full h-[30%] bottom-[5%] flex justify-center items-center font-extrabold text-3xl bg-[#00000044]">
                    Selected
                </div>}
                <img src={Characters.current[P2Details.current.selectionIndex].name_img} alt="Character_Name" className="absolute right-0 bottom-8 h-[75px] " />
            </div>
            <img src={'/PlayerSelect/Images/TopCornerUIElement.png'} className="fixed w-[25px] left-0 top-0 object-cover" />
            <img src={'/PlayerSelect/Images/TopCornerUIElement.png'} className="fixed w-[25px] right-0 top-0 -scale-x-100 object-cover" />
            <img src={'/PlayerSelect/Images/UiElements.png'} className="fixed w-screen h-[1080px] left-0 bottom-0" />
            <div className="w-[90%] h-[10%] fixed left-[5%] bottom-[100px] border-b-[5px] border-t-[5px] border-zinc-400 bg-red-500 flex">
                {
                    Characters.current.map((c, index) => {
                        if ((P1Details.current.selectionIndex == P2Details.current.selectionIndex) && (P1Details.current.selectionIndex == index)) {
                            return (<div key={index} className={`bg-gradient-to-r from-red-900 via-transparent to-red-900  flex items-end justify-start border-[3px] border-t-blue-500 border-l-blue-500 border-r-green-500 border-b-green-500 overflow-hidden`}  > <img src={c.image} alt={c.name} className="w-full mt-2" /> </div>)
                        }
                        else if (P1Details.current.selectionIndex == index) {
                            return (<div key={index} className={`bg-gradient-to-r from-red-900 via-transparent to-red-900  flex items-end justify-start border-[3px] border-blue-500 overflow-hidden`}  > <img src={c.image} alt={c.name} className="w-full mt-2" /> </div>)
                        }
                        else if (P2Details.current.selectionIndex == index) {
                            return (<div key={index} className={` bg-gradient-to-r from-red-900 via-transparent to-red-900  flex items-end justify-start border-[3px] border-green-500 overflow-hidden`}  > <img src={c.image} alt={c.name} className="object-cover w-full" /> </div>)
                        }
                        else {
                            return (<div key={index} className={` bg-red-500 flex items-end justify-start overflow-hidden `}  > <img src={c.image} alt={c.name} className="object-cover w-full" /> </div>)
                        }
                    })
                }
            </div>

            <img src={'/PlayerSelect/Essentials/VS.png'} className="w-[8%] fixed left-[46%] bottom-[calc(10%+250px)]" />
            <audio src={`${localStorage.getItem('genre')}/PlayerSelect/Player_Select_BGM.mp3`} ref={bgm} loop />
            <audio src={'/PlayerSelect/Audio/PlayerChange.wav'} ref={playerChange} />

            <div className="absolute w-full h-[0%] bottom-[0%] top-[100%] flex justify-center font-extrabold items-center bg-[#00000044]">

            </div>
        </div>
    );

}

export default Local