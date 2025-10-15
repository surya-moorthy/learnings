import Link from 'next/link'
import React from 'react'

const LogoutButton = () => {
  return (
    <Link className='hover:text-blue-500' href={"/"}>
        Logout
    </Link>
  )
}

export default LogoutButton