'use client';

import React, { useReducer, useRef, useState } from "react";
import { useRouter } from "next/navigation";



const LoginPage = () => {

    const uname = useRef("")
    const pass = useRef("")
    const [isLoading, setLoading] = useState(false)
    const router = useRouter();



    async function handleLogin(event) {
        event.preventDefault();
        setLoading(true)
        var reques = await fetch('http://192.168.1.198:2000/login/auth', { method: 'POST', headers: { 'Accept': '*/*', 'Content-type': 'application/json' }, body: JSON.stringify({ username: uname.current.value, password: pass.current.value }) })
        const jsd = await reques.json()
        if (jsd.status == 403) {
            uname.current.value = ""
            pass.current.value = ""
            alert("Invalid Credentials")
        }
        else {
            localStorage.setItem("token", jsd.token)
            router.push("/")
        }
        console.log(jsd)
        setLoading(false)
    }

    return (
        <div className="w-screen h-screen bg-zinc-800 flex flex-col">
            <div className="m-auto flex  h-[200px] rounded-lg border-[2px] border-zinc-700 w-[400px] mb-[5px] ">
                <form className="flex flex-col w-full h-full bg-zinc-700">
                    <input type="text" placeholder="Username" className=" w-[90%] h-[50px] flex m-auto align-middle items-center rounded-lg justify-center text-center " ref={uname} />
                    <input type="password" className="h-[50px] w-[90%] flex m-auto align-middle items-center rounded-lg justify-center text-center" placeholder="Password" ref={pass} />
                    {
                        isLoading && (<input type="submit" className="rounded-lg h-[50px] w-[90%] bg-red-500 cursor-not-allowed flex m-auto align-middle " onClick={(event) => { handleLogin(event) }} />)
                    }
                    {
                        !isLoading && (<input type="submit" className="rounded-lg h-[50px] w-[90%] bg-red-500 flex m-auto align-middle hover:bg-red-600 hover:border-[2px] hover:border-red-800" onClick={(event) => { handleLogin(event) }} />)
                    }
                </form>
            </div>
            <div className="flex m-auto h-[50px] mt-[5px] mb-[5px] rounded-lg border-[2px] border-zinc-700 w-[400px]">
                <div className="flex m-auto text-blue-600 cursor-pointer" onClick={() => { router.push('/Auth/signup') }}>
                    dont have an account ? Sign Up.
                </div>

            </div>
            <div className="flex m-auto h-[50px] mt-[5px] rounded-lg border-[2px] border-zinc-700 w-[400px]">
                <div className="flex m-auto text-blue-600 cursor-pointer" onClick={() => { localStorage.setItem('token', "Offline_Mode"); router.push('/') }}>
                    Continue Offline.
                </div>
            </div>
        </div >
    )
}

export default LoginPage