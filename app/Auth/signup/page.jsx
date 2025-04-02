'use client';

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"

import { useRef } from "react";

const Signup = () => {
    const pname = useRef("")
    const uname = useRef("")
    const pass = useRef("")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
    }, [])

    const router = useRouter()

    async function handleLogin(event) {
        event.preventDefault();
        const response = await fetch("http://192.168.1.198:2000/login/new", { method: "POST", headers: { 'Accept': '*/*', 'Content-type': 'application/json' }, body: JSON.stringify({ username: uname.current.value, password: pass.current.value, name: pname.current.value }) })
        var data = await response.json()
        if (data.status == 200) {
            localStorage.setItem("token", data.token)
            router.push("/Game")
        }
        else if (data.status == 401) {
            alert(data.message)
        }
        else {
            alert(data.message)
            router.push("/Auth")
        }
        console.log(data)
    }



    return (
        <div className="w-screen h-screen bg-zinc-800 flex flex-col">
            <div className="m-auto flex  h-[262.5px] rounded-lg border-[2px] border-zinc-700 w-[400px] mb-[5px] ">
                <form className="flex flex-col w-full h-full bg-zinc-700">
                    <input type="text" placeholder="Username" className=" w-[90%] h-[50px] flex m-auto align-middle items-center rounded-lg justify-center text-center " ref={uname} />
                    <input type="text" placeholder="Name" className=" w-[90%] h-[50px] flex m-auto align-middle items-center rounded-lg justify-center text-center " ref={pname} />
                    <input type="password" className=" h-[50px] w-[90%] flex m-auto align-middle items-center rounded-lg justify-center text-center" placeholder="Password" ref={pass} />
                    {
                        isLoading && (<input type="submit" className="rounded-lg h-[50px] w-[90%] bg-red-500 cursor-not-allowed flex m-auto align-middle " onClick={(event) => { handleLogin(event) }} />)
                    }
                    {
                        !isLoading && (<input type="submit" className="rounded-lg h-[50px] w-[90%] bg-red-500 flex m-auto align-middle hover:bg-red-600 hover:border-[2px] hover:border-red-800 cursor-pointer" onClick={(event) => { handleLogin(event) }} />)
                    }
                </form>
            </div>
            <div className="flex m-auto h-[50px] mt-[5px] rounded-lg border-[2px] border-zinc-700 w-[400px]">
                <div className="flex m-auto text-blue-600 cursor-pointer" onClick={() => { router.push('/Auth') }}>
                    Already have an account ? Sign In
                </div>
            </div>
        </div>
    )
}

export default Signup