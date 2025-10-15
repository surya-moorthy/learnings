import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

export default async function Navbar() {
    const session =  await getSession();
  
    return (
        <nav className="bg-white shadow-sm">
             <div className="container flex mx-auto p-4 justify-between items-center">
                  <Link href={"/"} className="text-xl font-bold text-gray-900">
                    Contact Manager
                  </Link>
                <div className="flex">
                    {
                    session ? (
                        <>
                        <Link href={"/contact"} className="hover:text-blue-600 mr-8">
                            Contacts
                        </Link>
                        <LogoutButton/>
                        </>
                    ) : (
                    <>
                        <Link href={"/login"} className="hover:text-blue-600 mr-8">
                            Login
                        </Link>
                        <Link href={"/register"} className="hover:text-blue-600">
                            Register
                        </Link>
                    </>
                    )
                }
            </div>
             </div>
        </nav>
    )
}