"use client"
import React from 'react'
import { logout } from '../actions/auth'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
  const router = useRouter();
    const handleLogout =  async () => {  
        try {
          await logout();    
          // redirect to the login page using client component.
          router.push("/login");
          router.refresh();
        } catch (error) {
          console.log("failed to logout : ",error);
        }
    }
  return (
    <button className='hover:text-blue-500 cursor-pointer' onClick={handleLogout}>
        Logout
    </button>
  )
}

export default LogoutButton