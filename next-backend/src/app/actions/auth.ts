interface User {
  name: string;
  email: string;
  role?: string;
}

interface RegisterTypes {
  message: string;
  user: User;
}

interface LoginTypes {
  message: string;
  user: User;
  token : string
}

interface UserTypes {
  id: string;
  name: string;
  email: string;
  role: string;
}


export async function register(name : string , email : string , password : string , role : string) {
     
}

export async function login(email : string , password : string) {
    
}

export async function me(authHeader : string) {
    
}