'use client';
import React from "react";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";




const Local = () => {
    // const router = useRouter()
    // var haveGameRerouted = false
    // function handleResizing(){
    //     if(!haveGameRerouted){
    //         haveGameRerouted = true
    //         router.push('/Game')
    //     }
    //     }

    //     useEffect(()=>{
    //       addEventListener('resize', ()=>{handleResizing()})
    //       return ()=>{
    //         removeEventListener('resize', ()=>{handleResizing()} )
    //       }
    //     })

    const BGM_Ref = useRef(false);
    const frameref = useRef(0)
    const [frameState, setFrame] = useState(0)
    const windowWidth = useRef(0)
    useEffect(() => {
        windowWidth.current = window.innerWidth
        Player2.current.data.PositionHorizontal = window.innerWidth - 175
    }, [])

    const AnimationMaxFramesData = useRef(
        {
            punch: {
                maxFrame: 12
            },
            kick: {
                maxFrame: 14
            },
            projectile: {
                maxFrame: 10
            },
            ultimate: {
                maxFrame: 30
            },
            uppercut: {
                maxFrame: 16
            },
            backHook: {
                maxFrame: 14
            },
            lowerCut: {
                maxFrame: 16
            },
            sweepKick: {
                maxFrame: 16
            },
            backKick: {
                maxFrame: 16
            },
            sweepPunch: {
                maxFrame: 16
            },
            running: {

            }




        }
    )

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

    const time = useRef(180)


    const possibleMovesets = useRef([
        'jkl', 'lk', 'ddj'
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
        playerImage: 0,
        StateImg: "idle",
        isOnGround: true,
        facing: 1,
        data: {
            isHit: false,
            PositionHorizontal: 100,
            PositionVertical: 50,
            VelocityVertical: 0,
            VelocityHorizontal: 0,
            width: 75,
            height: 125
        },
        Punch_1: {
            isActive: false,
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        },
        Projectile: {
            isHitting: false,
            isActive: false,
            P_facing: 1,
            PositionHorizontal: 0,
            PositionVertical: 75,
            chs: false
        },
        Kick_1: {
            isActive: false,
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        }
    })

    const Player2 = useRef({
        Round_Won: 0,
        health: 100,
        player: "",
        playerImage: 0,
        StateImg: "idle",
        isOnGround: true,
        facing: -1,
        data: {
            isHit: false,
            PositionHorizontal: 100,
            PositionVertical: 50,
            VelocityVertical: 0,
            VelocityHorizontal: 0,
            width: 75,
            height: 125
        },

        Punch_1: {
            isActive: false,
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        },
        Projectile: {
            isHitting: false,
            isActive: false,
            P_facing: -1,
            PositionHorizontal: 0,
            PositionVertical: 75,
            chs: false
        },
        Kick_1: {
            isActive: false,
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        }
    })


    useEffect(() => {
        BGM_Ref.current.play();
        BGM_Ref.current.volume = 0.1;
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
        if (keyCode === 104) {  // 'Num8'
            keyStats.current.num8 = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('8')
        }
        if (keyCode === 100) {  // 'Num4'
            keyStats.current.num4 = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('4')
        }
        if (keyCode === 102) {  // 'Num6'
            keyStats.current.num6 = value;
            p2Moves.current.isInitiated = true
            p2Moves.current.moves.push('6')
        }
        if (keyCode === 98) {  // 'Num2'
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
            console.log(p1Moves.current.moves)
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
        if (keyCode === 104) {  // 'Num8'
            keyStats.current.num8 = value;
        }
        if (keyCode === 100) {  // 'Num4'
            keyStats.current.num4 = value;
        }
        if (keyCode === 102) {  // 'Num6'
            keyStats.current.num6 = value;
        }
        if (keyCode === 98) {  // 'Num2'
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

    const gravity = useRef(300)


    function handlePlayer1Movement(dt) {
        if (keyStats.current.a && !(keyStats.current.w || Player1.current.data.PositionVertical - 50 > 0)) {
            if (!(Player1.current.Punch_1.isActive || Player1.current.Kick_1.isActive)) {


                if (keyStats.current.s) {
                    Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal - 250 * (dt / 1000)
                }
                else {
                    Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal - 400 * (dt / 1000)
                }

            }


        }
        if (keyStats.current.d && !(keyStats.current.w || Player1.current.data.PositionVertical - 50 > 0)) {
            if (!(Player1.current.Punch_1.isActive || Player1.current.Kick_1.isActive)) {


                if (keyStats.current.s) {
                    Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal + 250 * (dt / 1000)
                }
                else {
                    Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal + 400 * (dt / 1000)
                }

            }
        }

        if (keyStats.current.w && !(Player1.current.Punch_1.isActive || Player1.current.Kick_1.isActive)) {
            if (Player1.current.data.PositionVertical <= 50) {
                Player1.current.data.VelocityVertical = 1200
                if (keyStats.current.a) {
                    Player1.current.data.VelocityHorizontal = -400
                }
                if (keyStats.current.d) {
                    Player1.current.data.VelocityHorizontal = 400
                }
            }

        }

        if (keyStats.current.s && !(Player1.current.Punch_1.isActive || Player1.current.Kick_1.isActive)) {
            Player1.current.data.height = 75
        }
        if (!keyStats.current.s) {
            Player1.current.data.height = 125
        }


        Player1.current.data.PositionVertical = Player1.current.data.PositionVertical + (Player1.current.data.VelocityVertical * dt / 1000)
        Player1.current.data.VelocityVertical = Player1.current.data.VelocityVertical - (gravity.current * dt / 100)

        if (!(Player1.current.data.VelocityHorizontal == 0)) {
            Player1.current.data.PositionHorizontal = Player1.current.data.PositionHorizontal + (Player1.current.data.VelocityHorizontal * dt / 1000)
        }

        if (Player1.current.data.PositionVertical <= 50) {
            Player1.current.data.PositionVertical = 50
            Player1.current.data.VelocityHorizontal = 0
            Player1.current.data.VelocityVertical = 0
        }

        if (Player1.current.data.PositionHorizontal <= 0) {
            Player1.current.data.PositionHorizontal = 0
        }

        if (Player1.current.data.PositionHorizontal >= windowWidth.current - Player1.current.data.width) {
            Player1.current.data.PositionHorizontal = windowWidth.current - Player1.current.data.width
        }
    }



    function handlePlayer2Movement(dt) {

        if (keyStats.current.left && !(keyStats.current.up || Player2.current.data.PositionVertical - 50 > 0)) {
            if (!(Player2.current.Punch_1.isActive || Player2.current.Kick_1.isActive)) {


                if (keyStats.current.down) {
                    Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal - 250 * (dt / 1000)
                }
                else {
                    Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal - 400 * (dt / 1000)
                }

            }

        }
        if (keyStats.current.right && !(keyStats.current.up || Player2.current.data.PositionVertical - 50 > 0)) {

            if (!(Player2.current.Punch_1.isActive || Player2.current.Kick_1.isActive)) {

                if (keyStats.current.down) {
                    Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal + 250 * (dt / 1000)
                }
                else {
                    Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal + 400 * (dt / 1000)
                }

            }

        }
        if (keyStats.current.up && !(Player2.current.Punch_1.isActive || Player2.current.Kick_1.isActive)) {
            if (Player2.current.data.PositionVertical <= 50) {
                Player2.current.data.VelocityVertical = 1200
                if (keyStats.current.left) {
                    Player2.current.data.VelocityHorizontal = -400
                }
                if (keyStats.current.right) {
                    Player2.current.data.VelocityHorizontal = 400
                }
            }

        }
        if (keyStats.current.down && !(Player2.current.Punch_1.isActive || Player2.current.Kick_1.isActive)) {
            Player2.current.data.height = 75
        }
        if (!keyStats.current.down) {
            Player2.current.data.height = 125
        }





        Player2.current.data.PositionVertical = Player2.current.data.PositionVertical + (Player2.current.data.VelocityVertical * dt / 1000)
        Player2.current.data.VelocityVertical = Player2.current.data.VelocityVertical - (gravity.current * dt / 100)

        if (!(Player2.current.data.VelocityHorizontal == 0)) {
            Player2.current.data.PositionHorizontal = Player2.current.data.PositionHorizontal + (Player2.current.data.VelocityHorizontal * dt / 1000)
        }

        if (Player2.current.data.PositionVertical <= 50) {
            Player2.current.data.PositionVertical = 50
            Player2.current.data.VelocityHorizontal = 0
            Player2.current.data.VelocityVertical = 0
        }

        if (Player2.current.data.PositionHorizontal <= 0) {
            Player2.current.data.PositionHorizontal = 0
        }

        if (Player2.current.data.PositionHorizontal >= windowWidth.current - Player2.current.data.width) {
            Player2.current.data.PositionHorizontal = windowWidth.current - Player2.current.data.width
        }

    }


    function HandleP1Moveset(dt) {

        if (p1Moves.current.moves.length == 1) {
            switch (p1Moves.current.moves[0]) {
                case 'j':
                    {
                        Player1.current.StateImg = "punch"
                        Player1.current.Punch_1.isActive = true
                        Player1.current.Punch_1.isHitting = false
                        console.log('j Pressed')
                        break
                    }
                case 'k':
                    {
                        Player1.current.StateImg = "kick"
                        console.log('k Pressed')
                        break
                    }

                case 'l':
                    {
                        Player1.current.StateImg = "projectile"
                        Player1.current.Projectile.isActive = true
                        Player1.current.Projectile.P_facing = Player1.current.facing
                        Player1.current.Projectile.isHitting = false
                        console.log('l Pressed')
                        break
                    }

                case 'i':
                    {
                        Player1.current.StateImg = "ultimate"
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
            if (move == '') {
                p1Moves.current.moves = [p1Moves.current.moves[p1Moves.current.moves.length - 1]]
                HandleP1Moveset(dt)
            }
            executeMove(move)

        }
    }

    function handleP1Projectile(dt) {
        if (Player1.current.Projectile.isActive && !Player1.current.Kick_1.isActive && !Player1.current.Punch_1.isActive) {
            Player1.current.Projectile.PositionHorizontal = Player1.current.Projectile.PositionHorizontal + (Player1.current.Projectile.P_facing * 1100) * dt / 1000
            if ((Player1.current.Projectile.PositionHorizontal < -25) || (Player1.current.Projectile.PositionHorizontal >= window.innerWidth + 25)) {
                Player1.current.Projectile.PositionHorizontal = Player1.current.data.PositionHorizontal + 25
                Player1.current.Projectile.PositionVertical = Player1.current.data.PositionVertical + 100
                Player1.current.Projectile.isActive = false
            }

        }
        else {
            Player1.current.Projectile.PositionHorizontal = Player1.current.data.PositionHorizontal + 25
            Player1.current.Projectile.PositionVertical = Player1.current.data.PositionVertical + 100
        }
    }

    function handleP2Projectile(dt) {
        if (Player2.current.Projectile.isActive && !Player2.current.Kick_1.isActive && !Player2.current.Punch_1.isActive) {
            Player2.current.Projectile.PositionHorizontal = Player2.current.Projectile.PositionHorizontal + (Player2.current.Projectile.P_facing * 1100) * dt / 1000
            if ((Player2.current.Projectile.PositionHorizontal < -25) || (Player2.current.Projectile.PositionHorizontal >= window.innerWidth + 25)) {
                Player2.current.Projectile.PositionHorizontal = Player2.current.data.PositionHorizontal + 25
                Player2.current.Projectile.PositionVertical = Player2.current.data.PositionVertical + 100
                Player2.current.Projectile.isActive = false
            }

        }
        else {
            Player2.current.Projectile.PositionHorizontal = Player2.current.data.PositionHorizontal + 25
            Player2.current.Projectile.PositionVertical = Player2.current.data.PositionVertical + 100
        }
    }

    function HandleP2Moveset(dt) {

        if (p2Moves.current.moves.length == 1) {
            switch (p2Moves.current.moves[0]) {
                case '4':
                    {
                        Player2.current.StateImg = "punch"
                        Player2.current.Punch_1.isActive = true
                        Player2.current.Punch_1.isHitting = false
                        console.log('4 Pressed')
                        break
                    }
                case '2':
                    {
                        Player2.current.StateImg = "kick"
                        console.log('2 Pressed')
                        break
                    }

                case '6':
                    {
                        Player2.current.StateImg = "projectile"
                        Player2.current.Projectile.isActive = true
                        Player2.current.Projectile.isHitting = false
                        Player2.current.Projectile.P_facing = Player2.current.facing
                        console.log('6 Pressed')
                        break
                    }

                case '8':
                    {
                        Player2.current.StateImg = "ultimate"
                        console.log('8 Pressed')
                        break
                    }


            }

        }

        else if (p2Moves.current.moves.length > 1) {
            var move = ''
            possibleMovesets.current.map((moveSet) => {
                if (moveSet.replace('i', '8').replace('j', '4').replace('k', '2').replace('l', '6') == p2Moves.current.moves.join('')) {
                    p2Moves.current.isInitiated = false
                    p2Moves.current.moves = []
                    move = moveSet
                }
            })
            if (move == '') {
                p2Moves.current.moves = [p2Moves.current.moves[p2Moves.current.moves.length - 1]]
                HandleP1Moveset(dt)
            }
            executeMove(move)

        }
    }

    function executeMove(move) {
        console.log(move)
    }

    function handleFacing() {
        if (Player1.current.data.PositionHorizontal > Player2.current.data.PositionHorizontal) {
            Player1.current.facing = -1
            Player2.current.facing = 1
        }
        else {
            Player1.current.facing = 1
            Player2.current.facing = -1
        }
    }

    // code for projectile hit check

    function isP1HitWithProjectile() {
        if (!Player2.current.Projectile.isHitting && Player2.current.Projectile.isActive) {
            if (Player2.current.Projectile.P_facing == -1) {
                if ((Player1.current.data.PositionHorizontal <= Player2.current.Projectile.PositionHorizontal) && ((Player1.current.data.PositionHorizontal + Player1.current.data.width + 10) >= Player2.current.Projectile.PositionHorizontal)) {
                    if ((Player2.current.Projectile.PositionVertical >= Player1.current.data.PositionVertical) && (Player2.current.Projectile.PositionVertical <= (Player1.current.data.PositionVertical + Player1.current.data.height + 10))) {
                        Player1.current.health = Math.max(Player1.current.health - 7.5)
                        Player2.current.Projectile.isHitting = true
                        Player2.current.StateImg = "idle"
                        Player2.current.Projectile.isActive = false
                    }
                }
            }
            else if (Player2.current.Projectile.P_facing == 1) {
                if ((Player1.current.data.PositionHorizontal <= (Player2.current.Projectile.PositionHorizontal + 10)) && ((Player1.current.data.PositionHorizontal + Player1.current.data.width) >= Player2.current.Projectile.PositionHorizontal)) {
                    if ((Player2.current.Projectile.PositionVertical >= Player1.current.data.PositionVertical) && (Player2.current.Projectile.PositionVertical <= (Player1.current.data.PositionVertical + Player1.current.data.height + 10))) {
                        Player1.current.health = Math.max(Player1.current.health - 7.5)
                        Player2.current.Projectile.isHitting = true
                        Player2.current.StateImg = "idle"
                        Player2.current.Projectile.isActive = false
                    }
                }
            }
            if (Player1.current.Projectile.chs) {
                if (Player1.current.Projectile.P_facing == -1) {
                    if ((Player1.current.data.PositionHorizontal <= Player1.current.Projectile.PositionHorizontal) && ((Player1.current.data.PositionHorizontal + Player1.current.data.width + 10) >= Player1.current.Projectile.PositionHorizontal)) {
                        if ((Player1.current.Projectile.PositionVertical >= Player1.current.data.PositionVertical) && (Player1.current.Projectile.PositionVertical <= (Player1.current.data.PositionVertical + Player1.current.data.height + 10))) {
                            Player1.current.health = Math.max(Player1.current.health - 7.5)
                            Player1.current.Projectile.isHitting = true
                            Player1.current.StateImg = "idle"
                            Player1.current.Projectile.isActive = false
                        }
                    }
                }
                else if (Player1.current.Projectile.P_facing == 1) {
                    if ((Player1.current.data.PositionHorizontal <= (Player1.current.Projectile.PositionHorizontal + 10)) && ((Player1.current.data.PositionHorizontal + Player1.current.data.width) >= Player1.current.Projectile.PositionHorizontal)) {
                        if ((Player1.current.Projectile.PositionVertical >= Player1.current.data.PositionVertical) && (Player1.current.Projectile.PositionVertical <= (Player1.current.data.PositionVertical + Player1.current.data.height + 10))) {
                            Player1.current.health = Math.max(Player1.current.health - 7.5)
                            Player1.current.Projectile.isHitting = true
                            Player1.current.StateImg = "idle"
                            Player1.current.Projectile.isActive = false
                        }
                    }
                }

            }
        }

        // can hit self projectile check 



    }

    function isP2HitWithProjectile() {
        if (!Player1.current.Projectile.isHitting && Player1.current.Projectile.isActive) {
            if (Player1.current.Projectile.P_facing == -1) {
                if ((Player2.current.data.PositionHorizontal <= Player1.current.Projectile.PositionHorizontal) && ((Player2.current.data.PositionHorizontal + Player2.current.data.width + 10) >= Player1.current.Projectile.PositionHorizontal)) {
                    if ((Player1.current.Projectile.PositionVertical >= Player2.current.data.PositionVertical) && (Player1.current.Projectile.PositionVertical <= (Player2.current.data.PositionVertical + Player2.current.data.height + 10))) {
                        Player2.current.health = Math.max(Player2.current.health - 7.5)
                        Player1.current.Projectile.isHitting = true
                        Player1.current.StateImg = "idle"
                        Player1.current.Projectile.isActive = false
                    }
                }
            }
            else if (Player1.current.Projectile.P_facing == 1) {
                if ((Player2.current.data.PositionHorizontal <= (Player1.current.Projectile.PositionHorizontal + 10)) && ((Player2.current.data.PositionHorizontal + Player2.current.data.width) >= Player1.current.Projectile.PositionHorizontal)) {
                    if ((Player1.current.Projectile.PositionVertical >= Player2.current.data.PositionVertical) && (Player1.current.Projectile.PositionVertical <= (Player2.current.data.PositionVertical + Player2.current.data.height + 10))) {
                        Player2.current.health = Math.max(Player2.current.health - 7.5)
                        Player1.current.Projectile.isHitting = true
                        Player1.current.StateImg = "idle"
                        Player1.current.Projectile.isActive = false
                    }
                }
            }
            if (Player2.current.Projectile.chs) {
                if (Player2.current.Projectile.P_facing == -1) {
                    if ((Player2.current.data.PositionHorizontal <= Player2.current.Projectile.PositionHorizontal) && ((Player2.current.data.PositionHorizontal + Player2.current.data.width + 10) >= Player2.current.Projectile.PositionHorizontal)) {
                        if ((Player2.current.Projectile.PositionVertical >= Player2.current.data.PositionVertical) && (Player2.current.Projectile.PositionVertical <= (Player2.current.data.PositionVertical + Player2.current.data.height + 10))) {
                            Player2.current.health = Math.max(Player2.current.health - 7.5)
                            Player2.current.Projectile.isHitting = true
                            Player2.current.StateImg = "idle"
                            Player2.current.Projectile.isActive = false
                        }
                    }
                }
                else if (Player2.current.Projectile.P_facing == 1) {
                    if ((Player2.current.data.PositionHorizontal <= (Player2.current.Projectile.PositionHorizontal + 10)) && ((Player2.current.data.PositionHorizontal + Player2.current.data.width) >= Player2.current.Projectile.PositionHorizontal)) {
                        if ((Player2.current.Projectile.PositionVertical >= Player2.current.data.PositionVertical) && (Player2.current.Projectile.PositionVertical <= (Player2.current.data.PositionVertical + Player2.current.data.height + 10))) {
                            Player2.current.health = Math.max(Player2.current.health - 7.5)
                            Player2.current.Projectile.isHitting = true
                            Player2.current.StateImg = "idle"
                            Player2.current.Projectile.isActive = false
                        }
                    }
                }
            }
        }

    }


    // code for projectile hit check

    // code for clashing check

    function isClashing() {
        if ((Player1.current.Punch_1.PositionHorizontal + 10 >= Player2.current.Punch_1.PositionHorizontal) && (Player1.current.Punch_1.PositionHorizontal <= Player2.current.Punch_1.PositionHorizontal + 10) && (Player1.current.Punch_1.PositionVertical >= Player2.current.Punch_1.PositionVertical - 10) && (Player1.current.Punch_1.PositionVertical <= Player2.current.Punch_1.PositionVertical + 10)) {
            if (Player1.current.Punch_1.isActive && Player2.current.Punch_1.isActive) {
                handleClash('punch', 'punch')
            }

        }
        if ((Player1.current.Punch_1.PositionHorizontal + 10 >= Player2.current.Kick_1.PositionHorizontal) && (Player1.current.Punch_1.PositionHorizontal <= Player2.current.Kick_1.PositionHorizontal + 10) && (Player1.current.Punch_1.PositionVertical >= Player2.current.Kick_1.PositionVertical - 10) && (Player1.current.Punch_1.PositionVertical <= Player2.current.Kick_1.PositionVertical + 10)) {
            if (Player1.current.Punch_1.isActive && Player2.current.Kick_1.isActive) {
                handleClash('punch', 'kick')
            }
        }
        if ((Player1.current.Punch_1.PositionHorizontal + 10 >= Player2.current.Projectile.PositionHorizontal) && (Player1.current.Punch_1.PositionHorizontal <= Player2.current.Projectile.PositionHorizontal + 10) && (Player1.current.Punch_1.PositionVertical >= Player2.current.Projectile.PositionVertical - 10) && (Player1.current.Punch_1.PositionVertical <= Player2.current.Projectile.PositionVertical + 10)) {
            if (Player1.current.Punch_1.isActive && Player2.current.Projectile.isActive) {
                handleClash('punch', 'projectile')
            }
        }



        if ((Player1.current.Kick_1.PositionHorizontal + 10 >= Player2.current.Punch_1.PositionHorizontal) && (Player1.current.Kick_1.PositionHorizontal <= Player2.current.Punch_1.PositionHorizontal + 10) && (Player1.current.Kick_1.PositionVertical >= Player2.current.Punch_1.PositionVertical - 10) && (Player1.current.Kick_1.PositionVertical <= Player2.current.Punch_1.PositionVertical + 10)) {
            if (Player1.current.Kick_1.isActive && Player2.current.Punch_1.isActive) {
                handleClash('kick', 'punch')
            }
        }
        if ((Player1.current.Kick_1.PositionHorizontal + 10 >= Player2.current.Kick_1.PositionHorizontal) && (Player1.current.Kick_1.PositionHorizontal <= Player2.current.Kick_1.PositionHorizontal + 10) && (Player1.current.Kick_1.PositionVertical >= Player2.current.Kick_1.PositionVertical - 10) && (Player1.current.Kick_1.PositionVertical <= Player2.current.Kick_1.PositionVertical + 10)) {
            if (Player1.current.Kick_1.isActive && Player2.current.Kick_1.isActive) {
                handleClash('kick', 'kick')
            }
        }
        if ((Player1.current.Kick_1.PositionHorizontal + 10 >= Player2.current.Projectile.PositionHorizontal) && (Player1.current.Kick_1.PositionHorizontal <= Player2.current.Projectile.PositionHorizontal + 10) && (Player1.current.Kick_1.PositionVertical >= Player2.current.Projectile.PositionVertical - 10) && (Player1.current.Kick_1.PositionVertical <= Player2.current.Projectile.PositionVertical + 10)) {
            if (Player1.current.Kick_1.isActive && Player2.current.Projectile.isActive) {
                handleClash('kick', 'projectile')
            }
        }



        if ((Player1.current.Projectile.PositionHorizontal + 10 >= Player2.current.Punch_1.PositionHorizontal) && (Player1.current.Projectile.PositionHorizontal <= Player2.current.Punch_1.PositionHorizontal + 10) && (Player1.current.Projectile.PositionVertical >= Player2.current.Punch_1.PositionVertical - 10) && (Player1.current.Projectile.PositionVertical <= Player2.current.Punch_1.PositionVertical + 10)) {
            if (Player1.current.Projectile.isActive && Player2.current.Punch_1.isActive) {
                handleClash('projectile', 'punch')
            }
        }

        if ((Player1.current.Projectile.PositionHorizontal + 10 >= Player2.current.Kick_1.PositionHorizontal) && (Player1.current.Projectile.PositionHorizontal <= Player2.current.Kick_1.PositionHorizontal + 10) && (Player1.current.Projectile.PositionVertical >= Player2.current.Kick_1.PositionVertical - 10) && (Player1.current.Projectile.PositionVertical <= Player2.current.Kick_1.PositionVertical + 10)) {

            if (Player1.current.Projectile.isActive && Player2.current.Kick_1.isActive) {
                handleClash('projectile', 'kick')
            }
        }
        if ((Player1.current.Projectile.PositionHorizontal + 10 >= Player2.current.Projectile.PositionHorizontal) && (Player1.current.Projectile.PositionHorizontal <= Player2.current.Projectile.PositionHorizontal + 10) && (Player1.current.Projectile.PositionVertical >= Player2.current.Projectile.PositionVertical - 10) && (Player1.current.Projectile.PositionVertical <= Player2.current.Projectile.PositionVertical + 10)) {
            if (Player1.current.Projectile.isActive && Player2.current.Projectile.isActive) {
                handleClash('projectile', 'projectile')
            }
        }
    }

    // code for clashing check

    function handleClash(P1Data, P2Data) {
        if (P1Data == 'projectile' && P2Data == 'projectile') {
            Player1.current.Projectile.isActive = false
            Player2.current.Projectile.isActive = false
        }
        if (P1Data == 'projectile' && (P2Data == 'punch' || P2Data == 'kick')) {
            Player1.current.Projectile.P_facing = Player1.current.Projectile.P_facing * -1
            Player1.current.Projectile.chs = true
        }
        if ((P1Data == 'punch' || P1Data == 'kick') && P2Data == 'projectile') {
            Player2.current.Projectile.P_facing = Player2.current.Projectile.P_facing * -1
            Player2.current.Projectile.chs = true
        }
    }

    var P1tickTime = 0
    function handlePlayer1Animation(dt) {
        P1tickTime = P1tickTime + dt
        if (P1tickTime >= 50) {
            P1tickTime = P1tickTime % 50
            if (!(Player1.current.StateImg == "idle") && Player1.current.playerImage >= AnimationMaxFramesData.current[Player1.current.StateImg].maxFrame) {
                Player1.current.StateImg = "idle"
                Player1.current.playerImage = 0
                Player1.current.Kick_1.isActive = false
                Player1.current.Kick_1.isHitting = false
                Player1.current.Punch_1.isActive = false
                Player1.current.Punch_1.isHitting = false
            }
            if (Player1.current.StateImg != "idle") {
                Player1.current.playerImage = Player1.current.playerImage + 1
            }

        }
    }

    var P2tickTime = 0

    function handlePlayer2Animation(dt) {
        P2tickTime = P2tickTime + dt
        if (P2tickTime >= 50) {
            P2tickTime = P2tickTime % 50
            if (!(Player2.current.StateImg == "idle") && Player2.current.playerImage >= AnimationMaxFramesData.current[Player2.current.StateImg].maxFrame) {
                Player2.current.StateImg = "idle"
                Player2.current.playerImage = 0
                Player2.current.Kick_1.isActive = false
                Player2.current.Kick_1.isHitting = false
                Player2.current.Punch_1.isActive = false
                Player2.current.Punch_1.isHitting = false
            }
            if (Player2.current.StateImg != "idle") {
                Player2.current.playerImage = Player1.current.playerImage + 1
            }
        }
    }


    function handlePlayer1Moves(dt) {

    }
    function handlePlayer2Moves(dt) {

    }

    function handlePlayer1Ultimate(dt) {
        if (Player1.current.StateImg == "ultimate") {

        }
    }

    function handlePlayer2Ultimate(dt) {

    }

    function checkP1Victory() {

    }

    function checkP2Victory() {

    }


    function GameLogic(dt) {
        handleTime(dt)
        handlePlayer1Movement(dt)
        handlePlayer2Movement(dt)
        handleP1MovesetRefresh(dt)
        handleP2MovesetRefresh(dt)
        handleP1Projectile(dt)
        handleP2Projectile(dt)
        handleFacing()
        isClashing()
        isP1HitWithProjectile()  // added functions for checking projectile hit
        isP2HitWithProjectile()
        handlePlayer1Moves(dt)
        handlePlayer1Ultimate(dt)
        handlePlayer2Moves(dt)
        handlePlayer2Ultimate(dt)
        handlePlayer1Animation(dt)
        handlePlayer2Animation(dt)







    }

    const P1ImageUrl = useRef(Characters.current[parseInt(localStorage.getItem('P1CharIndex'))].image)
    const P2ImageUrl = useRef(Characters.current[parseInt(localStorage.getItem('P2CharIndex'))].image)



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
        if (frameref.current > 1000) {
            frameref.current = frameref.current % 1000
        }
        setFrame(frameref.current)
        requestAnimationFrame(playloop)
        GameLogic(dt)

    }


    const imgUrlRef = useRef("")
    useEffect(() => {
        // imgUrlRef.current = localStorage.getItem("imgUrl")
        addEventListener('keydown', (event) => { handleKeyDown(event, true) })
        addEventListener('keyup', (event) => { handleKeyUp(event, false) })
        return () => {
            window.removeEventListener('keydown', (event) => { handleKeyDown(event, true) });
            window.removeEventListener('keyup', (event) => { handleKeyUp(event, true) });
        };

    }, [])


    return (
        <div className="bg-stone-950 w-screen h-screen object-cover flex">

            <div className="absolute z-[200] bg-white" style={{
                left: `${Player1.current.data.PositionHorizontal}px`,
                bottom: `${Player1.current.data.PositionVertical}px`,
                width: `${Player1.current.data.width}px`,
                height: `${Player1.current.data.height}px`
            }} >
            </div>
            <div className="fixed z-[100] bottom-[40px] bg-[#00000033] h-[20px] w-[80px] rounded-[100%]" style={{
                left: `${Player1.current.data.PositionHorizontal - 2.5}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[25px] h-[25px] bg-white" style={{
                left: `${Player1.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player1.current.data.PositionVertical + Player1.current.data.height}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player1.current.Projectile.PositionHorizontal}px`,
                bottom: `${Player1.current.Projectile.PositionVertical}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player1.current.Punch_1.PositionHorizontal}px`,
                bottom: `${Player1.current.Punch_1.PositionVertical}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player1.current.Kick_1.PositionHorizontal}px`,
                bottom: `${Player1.current.Kick_1.PositionVertical}px`
            }}>
            </div>



            <div className="absolute z-[200] bg-white" style={{
                left: `${Player2.current.data.PositionHorizontal}px`,
                bottom: `${Player2.current.data.PositionVertical}px`,
                width: `${Player2.current.data.width}px`,
                height: `${Player2.current.data.height}px`
            }} >
            </div>
            <div className="fixed z-[100] bottom-[40px] bg-[#00000033] h-[20px] w-[80px] rounded-[100%]" style={{
                left: `${Player2.current.data.PositionHorizontal - 2.5}px`
            }}></div>
            <div className="absolute z-[200] w-[25px] h-[25px] bg-white" style={{
                left: `${Player2.current.data.PositionHorizontal + 25}px`,
                bottom: `${Player2.current.data.PositionVertical + Player2.current.data.height}px`
            }}></div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player2.current.Projectile.PositionHorizontal}px`,
                bottom: `${Player2.current.Projectile.PositionVertical}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player2.current.Punch_1.PositionHorizontal}px`,
                bottom: `${Player2.current.Punch_1.PositionVertical}px`
            }}>
            </div>
            <div className="absolute z-[200] w-[10px] h-[10px] bg-red-500" style={{
                left: `${Player2.current.Kick_1.PositionHorizontal}px`,
                bottom: `${Player2.current.Kick_1.PositionVertical}px`
            }}>
            </div>



            <div className="absolute z-[200] bg-white">

            </div>
            <img src={localStorage.getItem("imgUrl")} className="h-auto w-full object-contain fixed bottom-[0px] -z-100" alt="arena Image" />

            <div className=" fixed top-[25px] left-[1%] w-[46%] h-[44px] bg-gradient-to-t from-blue-500 via-cyan-300 to-blue-500 transform skew-x-12 border-solid border-blue-800 border-[2px]">
                <div className="m-[6px] mx-[10px] bg-gradient-to-t from-red-500 via-red-600 to-red-400 w-[calc(100%-20px)] h-[28px] border-solid border-blue-800 border-[2px]">
                    <div className="bg-gradient-to-t from-green-600 via-green-600 to-green-400 left-0 h-[24px] " style={{ width: `${Math.max(Player1.current.health, 0)}%` }}>

                    </div>
                </div>
            </div>
            <div className=" fixed top-[75px] left-4 w-[5%] h-[60px] bg-gradient-to-t from-blue-500 via-cyan-300 to-blue-500 transform -skew-x-12 border-solid border-blue-800 border-[2px]">
                <div className="m-[4px] mx-[4px] bg-gradient-to-t from-red-500 via-red-600 to-red-400 w-[calc(100%-8px)] h-[calc(100%-8px)] border-solid border-blue-800">
                    <img src={`${P1ImageUrl.current}`} alt="" className="scale-x-[-1] w-full absolute bottom-[4px] left-0 skew-x-12" />
                </div>
            </div>
            <div className=" fixed top-[75px] left-[calc(16px+5%+8px)] w-[2%] h-[30px] bg-gradient-to-t from-blue-500 via-cyan-300 to-blue-500 transform -skew-x-12 border-solid border-blue-800 border-[2px]">
                <div className={`m-[4px] mx-[4px] bg-gradient-to-t ${Player1.current.Round_Won >= 1 ? 'from-green-500 via-green-600 to-green-400' : 'from-red-500 via-red-600 to-red-400'} w-[calc(100%-8px)] h-[calc(100%-8px)] border-solid border-blue-800`}>
                </div>
            </div>
            <div className=" fixed top-[75px] left-[calc(16px+7%+12px)] w-[2%] h-[30px] bg-gradient-to-t from-blue-500 via-cyan-300 to-blue-500 transform -skew-x-12 border-solid border-blue-800 border-[2px]">
                <div className={`m-[4px] mx-[4px] bg-gradient-to-t ${Player1.current.Round_Won >= 2 ? 'from-green-500 via-green-600 to-green-400' : 'from-red-500 via-red-600 to-red-400'} w-[calc(100%-8px)] h-[calc(100%-8px)] border-solid border-blue-800`}>
                </div>
            </div>


            <img src={`${Characters.current[parseInt(localStorage.getItem('P1CharIndex'))].name_img}`} className="fixed left-[calc(10px+5%)] top-[calc(70px+30px)] h-[50px] skew-x-[15deg]" alt="" />


            <div className=" fixed top-[25px] right-[1%] w-[46%] h-[44px] bg-gradient-to-t from-blue-500 via-cyan-300 to-blue-500 transform -skew-x-12 border-solid border-blue-800 border-[2px]">
                <div className="m-[6px] mx-[10px] bg-gradient-to-t from-red-500 via-red-600 to-red-400 w-[calc(100%-20px)] h-[28px] border-solid border-blue-800 border-[2px]">
                    <div className="bg-gradient-to-t from-green-600 via-green-600 to-green-400 right-0 h-full" style={{ width: `${Math.max(Player2.current.health, 0)}%` }}>

                    </div>
                </div>
            </div>

            <div className=" fixed top-[75px] right-4 w-[5%] h-[60px] bg-gradient-to-t from-blue-500 via-cyan-300 to-blue-500 transform skew-x-12 border-solid border-blue-800 border-[2px]">
                <div className="m-[4px] mx-[4px] bg-gradient-to-t from-red-500 via-red-600 to-red-400 w-[calc(100%-8px)] h-[calc(100%-8px)] border-solid border-blue-800">
                    <img src={`${P2ImageUrl.current}`} alt="" className="w-full absolute bottom-[4px] right-0 -skew-x-12" />
                </div>
            </div>

            <div className=" fixed top-[75px] right-[calc(16px+5%+8px)] w-[2%] h-[30px] bg-gradient-to-t from-blue-500 via-cyan-300 to-blue-500 transform skew-x-12 border-solid border-blue-800 border-[2px]">
                <div className="m-[4px] mx-[4px] bg-gradient-to-t from-red-500 via-red-600 to-red-400 w-[calc(100%-8px)] h-[calc(100%-8px)] border-solid border-blue-800">
                </div>
            </div>
            <div className=" fixed top-[75px] right-[calc(16px+7%+12px)] w-[2%] h-[30px] bg-gradient-to-t from-blue-500 via-cyan-300 to-blue-500 transform skew-x-12 border-solid border-blue-800 border-[2px]">
                <div className="m-[4px] mx-[4px] bg-gradient-to-t from-red-500 via-red-600 to-red-400 w-[calc(100%-8px)] h-[calc(100%-8px)] border-solid border-blue-800">
                </div>
            </div>

            <img src={`${Characters.current[parseInt(localStorage.getItem('P2CharIndex'))].name_img}`} className="fixed right-[calc(4px+5%)] top-[calc(70px+30px)] h-[50px] skew-x-[40deg]" alt="" />


            <div className="flex  bg-transparent w-[100px] h-[35px] p-auto m-auto z-100 mt-[20px] text-3xl justify-center font-extrabold text-white">
                {`${time.current}`}
            </div>
            <audio src={`/${localStorage.getItem('genre')}/Gameplay/OverDrive.mp3`} ref={BGM_Ref} loop />
        </div>
    );

}

export default Local