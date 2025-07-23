"use client"

import { useState } from "react"
import { signup } from "@/app/actions/user";

export function Signup() {  
    const [email , setEmail] = useState("");
    const [password,setPassword] = useState("");

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen ">
             <div className="flex flex-col justify-center items-center bg-neutral-600 p-8 rounded-xl">
                   <input 
                   type="text" 
                   name="email" 
                   id="email" 
                   placeholder="email" 
                   onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                   className="bg-neutral-200 text-neutral-900 px-4 py-2 text-lg rounded-lg m-4"/>
                    <input 
                    type="password" 
                    name="password" 
                    id="pass" 
                    placeholder="password" 
                    className="bg-neutral-200 text-neutral-900 px-4 py-2 text-lg rounded-lg m-4"
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    />
                    <button 
                    className="bg-neutral-50 hover:bg-purple-400 text-neutral-950 px-6 py-2 rounded-xl transition-colors duration-300"
                    onClick={async ()=>{
                        await signup(email , password);
                    }}
                    >
                        Sign up
                    </button>
             </div>
        </div>
    )
}