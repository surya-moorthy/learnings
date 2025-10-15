"use client"

import { login } from "../actions/auth"

export default function LoginForm() {
    return (
        <form className="flex flex-col gap-4" action={login}>
             <div>
                  <label className="block text-sm font-medium text-gray-700">
                     Email  
                  </label>
                  <input 
                  type="text"  
                  name="email" 
                  placeholder="enter your email..." 
                  required 
                  className="mt-1 block w-full rounded-md border-gray-300 shadom-sm focus:border-blue-500 focus:ring-blue-50 sm:text-sm p-2"/>
             </div>
             <div>
                  <label className="block text-sm font-medium text-gray-700">
                     Password
                  </label>
                  <input 
                  type="password"  
                  name="password" 
                  placeholder="enter your password..." 
                  required 
                  className="mt-1 block w-full rounded-md border-gray-300 shadom-sm focus:border-blue-500 focus:ring-blue-50 sm:text-sm p-2"/>
             </div>
             <button type="submit" className="w-full bg-blue-500 rounded-lg text-white font-medium px-4 py-2 shadow-sm border border-transparent hover:bg-blue-700" >
                    Login
             </button>
        </form>
    )
}