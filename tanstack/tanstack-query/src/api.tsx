import axios from "axios";
import type { UserType } from "./type/types";


const BACKEND_URL = "http://localhost:3000/api/v1/users"


export const createUsers = async (user : Omit<UserType, "_id">) => {
  const users = await axios.post(`${BACKEND_URL}/create`,{
    username : user.username,
    password : user.password,
    email : user.email
  })
  if (!users.data) throw new Error("Failed tp fetch Users")
  return users.data();
}

export const getUsers = async () => {
  const users = await axios.get(`${BACKEND_URL}`)
  return users.data;
}

export const deleteUser = async (id : string)=> {
    const deleteUser = await axios.delete(`${BACKEND_URL}/delete?id=${id}`);
    return deleteUser;
}