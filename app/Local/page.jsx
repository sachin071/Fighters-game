'use client';

import React from "react";
import { useRef, useState, useEffect } from "react";




const Local = () => {

    const BGM_Ref = useRef(false);
    const frameref = useRef(0)
    const [frameState, setFrame] = useState(0)
    const windowWidth = useRef(0)
    useEffect(() => {
        windowWidth.current = window.innerWidth
        Player2.current.data.PositionHorizontal = window.innerWidth - 175
    }, [])

    const p1Moves = useRef({
        isInitiated: false,
        moves: []
    })
    const p2Moves = useRef({
        isInitiated: false,
        moves: []

    })




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
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
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

    const time = useRef(180)


    const possibleMovesets = useRef([
        'jkl', 'lk'
    ])
    const keyStats = useRef({
        w: false,
        s: false,
        a: false,
        d: false,
        j: false,
        k: false,
        l: false,
        i: false,
        up: false,
        down: false,
        left: false,
        right: false,
        num8: false,
        num4: false,
        num6: false,
        num2: false,
        esc: false // 27
    })


    const Player1 = useRef({
        Round_Won: 0,
        health: 100,
        player: "",
        playerImage: "",
        StateImg: "",
        isOnGround: true,
        facing: 1,
        data: {
            isHit: false,
            PositionHorizontal: 100,
            PositionVertical: 50,
            VelocityVertical: 0,
            VelocityHorizontal: 0
        },
        Punch_1: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        },
        Projectile: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 75
        },
        Kick_1: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        }
    })

    const Player2 = useRef({
        Round_Won: 0,
        health: 100,
        player: "",
        playerImage: "",
        StateImg: "",
        isOnGround: true,
        facing: -1,
        data: {
            isHit: false,
            PositionHorizontal: 100,
            PositionVertical: 50,
            VelocityVertical: 0,
            VelocityHorizontal: 0
        },

        Punch_1: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        },
        Projectile: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 75
        },
        Kick_1: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        }
    })


    useEffect(() => {
        BGM_Ref.current.play();
        BGM_Ref.current.volume = 0.2;
        BGM_Ref.current.currentTime = 60
        Player1.current.player = Characters.current[parseInt(localStorage.getItem("P1CharIndex"))].name
        Player2.current.player = Characters.current[parseInt(localStorage.getItem("P2CharIndex"))].name
    }, [])

    const handleKeyDown = (e, value) => {
        const keyCode = e.keyCode;

        if (keyCode === 87) {  // 'w'
            keyStats.current.w = value;
        }
        if (keyCode === 83) {  // 's'
            keyStats.current.s = value;
        }
        if (keyCode === 65) {  // 'a'
            keyStats.current.a = value;
        }
        if (keyCode === 68) {  // 'd'
            keyStats.current.d = value;
        }
        if (keyCode === 74) {  // 'j'
            keyStats.current.j = value;
            p1Moves.current.isInitiated = true
            p1Moves.current.moves.push('j')
        }
        if (keyCode === 75) {  // 'k'
            keyStats.current.k = value;
            p1Moves.current.isInitiated = true
            p1Moves.current.moves.push('k')
        }
        if (keyCode === 76) {  // 'l'
            keyStats.current.l = value;
            p1Moves.current.isInitiated = true
            p1Moves.current.moves.push('l')
        }
        if (keyCode === 73) {  // 'i'
            keyStats.current.i = value;
            p1Moves.current.isInitiated = true
            p1Moves.current.moves.push('i')
        }
        if (keyCode === 38) {  // 'ArrowUp'
            keyStats.current.up = value;
        }
        if (keyCode === 40) {  // 'ArrowDown'
            keyStats.current.down = value;
        }
        if (keyCode === 37) {  // 'ArrowLeft'
            keyStats.current.left = value;
        }
        if (keyCode === 39) {  // 'ArrowRight'
            keyStats.current.right = value;
        }
        if (keyCode === 56) {  // 'Num8'
            keyStats.current.num8 = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('8')
        }
        if (keyCode === 52) {  // 'Num4'
            keyStats.current.num4 = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('4')
        }
        if (keyCode === 54) {  // 'Num6'
            keyStats.current.num6 = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('6')
        }
        if (keyCode === 50) {  // 'Num2'
            keyStats.current.num2 = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('2')
        }
        if (keyCode === 27) {  // 'esc'
            keyStats.current.esc = value;
        }
    };

    const handleKeyUp = (e, value) => {
        const keyCode = e.keyCode;

        if (keyCode === 87) {  // 'w'
            keyStats.current.w = value;
            p1Moves.current.isInitiated = true
            p1Moves.current.moves.push('w')
        }
        if (keyCode === 83) {  // 's'
            keyStats.current.s = value;
            p1Moves.current.isInitiated = true
            p1Moves.current.moves.push('s')
        }
        if (keyCode === 65) {  // 'a'
            keyStats.current.a = value;
            p1Moves.current.isInitiated = true
            p1Moves.current.moves.push('a')
        }
        if (keyCode === 68) {  // 'd'
            keyStats.current.d = value;
            p1Moves.current.isInitiated = true
            p1Moves.current.moves.push('d')
        }
        if (keyCode === 74) {  // 'j'
            keyStats.current.j = value;
        }
        if (keyCode === 75) {  // 'k'
            keyStats.current.k = value;
        }
        if (keyCode === 76) {  // 'l'
            keyStats.current.l = value;
        }
        if (keyCode === 73) {  // 'i'
            keyStats.current.i = value;
        }
        if (keyCode === 38) {  // 'ArrowUp'
            keyStats.current.up = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('up')
        }
        if (keyCode === 40) {  // 'ArrowDown'
            keyStats.current.down = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('down')
        }
        if (keyCode === 37) {  // 'ArrowLeft'
            keyStats.current.left = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('left')

        }
        if (keyCode === 39) {  // 'ArrowRight'
            keyStats.current.right = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('right')
        }
        if (keyCode === 56) {  // 'Num8'
            keyStats.current.num8 = value;
        }
        if (keyCode === 52) {  // 'Num4'
            keyStats.current.num4 = value;
        }
        if (keyCode === 54) {  // 'Num6'
            keyStats.current.num6 = value;
        }
        if (keyCode === 50) {  // 'Num2'
            keyStats.current.num2 = value;
        }
        if (keyCode === 27) {  // 'esc'
            keyStats.current.esc = value;
        }
    };

    var timing = 0

    function handleTime(dt) {
        timing = timing + dt
        if (timing >= 1000) {
            time.current = time.current - 1
            timing = timing % 1000
        }
    }

    var p1movesTiming = 0
    function handleP1MovesetRefresh(dt) {
        if (p1Moves.current.isInitiated) {
            p1movesTiming = p1movesTiming + dt
            if (p1movesTiming >= 200) {
                p1movesTiming = 0
                HandleP1Moveset(dt)
                p1Moves.current.moves = []
                p1Moves.current.isInitiated = false
            }
        }
        else {

        }
    }

    var p2MovesTiming = 0
    function handleP2MovesetRefresh(dt) {
        if (p2Moves.current.isInitiated) {
            p2MovesTiming = p2MovesTiming + dt
            if (p2MovesTiming >= 200) {
                p2MovesTiming = 0
                HandleP2Moveset(dt)
                p2Moves.current.moves = []
                p2Moves.current.isInitiated = false
            }
        }
        else {

        }
    }


    function handlePlayer1Movement(dt) {
        if (keyStats.current.a) {
            if (Player1.current.data.PositionHorizontal <= 0) {
                Player1.current.data.PositionHorizontal = 0
            }
            else {
                Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal - 400 * (dt / 1000)
            }

        }
        if (keyStats.current.d) {

            if (Player1.current.data.PositionHorizontal >= windowWidth.current - 75) {
                Player1.current.data.PositionHorizontal = windowWidth.current - 75
            }
            else {
                Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal + 400 * (dt / 1000)
            }
        }
        // if(keyStats.current.w){
        //     Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal + 400 *(dt/1000)
        // }
        // if(keyStats.current.s){
        //     Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal - 400 *(dt/1000)
        // }
    }

    function handlePlayer2Movement(dt) {

        if (keyStats.current.left) {
            if (Player2.current.data.PositionHorizontal <= 0) {
                Player2.current.data.PositionHorizontal = 0
            }
            else {
                Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal - 400 * (dt / 1000)
            }

        }
        if (keyStats.current.right) {

            if (Player2.current.data.PositionHorizontal >= windowWidth.current - 75) {
                Player2.current.data.PositionHorizontal = windowWidth.current - 75
            }
            else {
                Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal + 400 * (dt / 1000)
            }
        }
        // if(keyStats.current.up){
        //     Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal + 400 *(dt/1000)
        // }
        // if(keyStats.current.down){
        //     Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal - 400 *(dt/1000)
        // }
    }

    var tickTime = 0

    function handleGameTick(dt) {
        tickTime = tickTime + dt
        if (tickTime >= 50) {
            tickTime = tickTime % 50
        }
    }

    function HandleP1Moveset(dt) {

        if (p1Moves.current.moves.length == 1) {
            switch (p1Moves.current.moves[0]) {
                case 'j':
                    {
                        console.log('j Pressed')
                        break
                    }
                case 'k':
                    {
                        console.log('k Pressed')
                        break
                    }

                case 'l':
                    {
                        console.log('l Pressed')
                        break
                    }

                case 'i':
                    {
                        console.log('i Pressed')
                        break
                    }


            }

        }

        else if (p1Moves.current.moves.length > 1) {
            var move = ''
            possibleMovesets.current.map((moveSet) => {
                if (moveSet == p1Moves.current.moves.join('')) {
                    p1Moves.current.isInitiated = false
                    p1Moves.current.moves = []
                    move = moveSet
                }
            })
            executeMove(move)

        }
    }

    function HandleP2Moveset(dt) {

        if (p2Moves.current.moves.length == 1) {
            switch (p2Moves.current.moves[0]) {
                case '4':
                    {
                        console.log('4 Pressed')
                        break
                    }
                case '2':
                    {
                        console.log('2 Pressed')
                        break
                    }

                case '6':
                    {
                        console.log('6 Pressed')
                        break
                    }

                case '8':
                    {
                        console.log('8 Pressed')
                        break
                    }


            }

        }

        else if (p1Moves.current.moves.length > 1) {
            var move = ''
            possibleMovesets.current.map((moveSet) => {
                if (moveSet == p1Moves.current.moves.join('')) {
                    p1Moves.current.isInitiated = false
                    p1Moves.current.moves = []
                    move = moveSet
                }
            })
            executeMove(move)

        }
    }

    function executeMove(move) {
        console.log(move)
    }



    function GameLogic(dt) {
        handleTime(dt)
        handlePlayer1Movement(dt)
        handlePlayer2Movement(dt)
        handleP1MovesetRefresh(dt)
        handleP2MovesetRefresh(dt)
    }

    useEffect(() => {
        playloop()
    }, [])

    var lastTime = Date.now()

    const playloop = () => {
        var currTime = Date.now()
        var dt = currTime - lastTime
        lastTime = currTime
        if (BGM_Ref.current.currentTime < 60) {
            BGM_Ref.current.currentTime = 60
        }

        frameref.current = frameref.current + 1
        setFrame(frameref.current)
        requestAnimationFrame(playloop)
        GameLogic(dt)

    }


    const imgUrlRef = useRef("")
    useEffect(() => {
        // imgUrlRef.current = localStorage.getItem("imgUrl")
        addEventListener('keydown', (event) => { handleKeyDown(event, true) })
        addEventListener('keyup', (event) => { handleKeyUp(event, false) })

    }, [])


    return (
        <div className="bg-stone-950 w-screen h-screen object-cover flex">
            <div className="fixed w-[45%] h-[25px] bg-gradient-to-t from-red-500 via-red-600 to-red-400 left-[2%] top-[25px] rounded-md overflow-hidden">
                <div className="h-full absolute left-0 bg-gradient-to-t from-green-600 via-green-600 to-green-400 rounded-sm" style={{ width: `${Player1.current.health}%` }}>

                </div>
            </div>
            <div className="fixed w-[45%] h-[25px] bg-gradient-to-t from-red-500 via-red-600 to-red-400 right-[2%] top-[25px] rounded-md overflow-hidden">
                <div className=" absolute right-0 bg-gradient-to-t from-green-600 via-green-600 to-green-400 h-full rounded-sm" style={{ width: `${Player2.current.health}%` }}>

                </div>
            </div>
            <div className="bg-zinc-50 fixed h-[50px] w-full bottom-[0px] ">
            </div>
            <div className="flex  bg-transparent w-[100px] h-[35px] p-auto m-auto z-100 mt-[20px] text-3xl justify-center font-extrabold">
                {`${time.current}`}
            </div>


            <div className="absolute z-[200] w-[75px] h-[125px] bg-white" style={{
                left: `${Player1.current.data.PositionHorizontal}px`,
                bottom: `${Player1.current.data.PositionVertical}px`
            }} >
            </div>
            <div className="absolute z-[200] w-[25px] h-[25px] bg-white" style={{
                left: `${Player1.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player1.current.data.PositionVertical + 125}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player1.current.Projectile.PositionHorizontal + Player1.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player1.current.Projectile.PositionVertical}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player1.current.Punch_1.PositionHorizontal + Player1.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player1.current.Punch_1.PositionVertical + Player1.current.data.PositionVertical}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player1.current.Kick_1.PositionHorizontal + Player1.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player1.Kick_1.Projectile.PositionVertical + Player1.current.data.PositionVertical}px`
            }}>
            </div>



            <div className="absolute z-[200] w-[75px] h-[125px] bg-white" style={{
                left: `${Player2.current.data.PositionHorizontal}px`,
                bottom: `${Player2.current.data.PositionVertical}px`
            }} >
            </div>
            <div className="absolute z-[200] w-[25px] h-[25px] bg-white" style={{
                left: `${Player2.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player2.current.data.PositionVertical + 125}px`
            }}></div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player2.current.Projectile.PositionHorizontal + Player2.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player2.current.Projectile.PositionVertical}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player2.current.Punch_1.PositionHorizontal + Player2.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player2.current.Punch_1.PositionVertical + Player2.current.data.PositionVertical}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player2.current.Kick_1.PositionHorizontal + Player2.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player2.Kick_1.Projectile.PositionVertical + Player2.current.data.PositionVertical}px`
            }}>
            </div>



            <div className="absolute z-[200] bg-white">

            </div>
            {/* <img src={localStorage.getItem("imgUrl")} alt="arena Image" className="flex" /> */}
            <audio src={'/Gameplay/OverDrive.mp3'} ref={BGM_Ref} loop />
        </div>
    );

}

export default Local

