"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";

const API_URL="http://localhost:3002";

export const login = async (formData : FormData) => {
    console.log("formData:",formData);
    try {
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`);
        console.log(response.data[0]);
        const user : UserType  = response.data[0];
    
        if(!user) throw new Error("invalid Credentials");

        // set the cookies
   
    } catch (error) {
        throw new Error("Failed to Login");
    }
redirect("/contact");
}

export const logout = async () => {
    redirect("/")
}