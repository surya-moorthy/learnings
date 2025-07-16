import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client =  new PrismaClient();
// psql '
export async function POST(req : NextRequest) {
    // body 
    const body = await req.json();

    try {
      await client.user.create({
        data : {
            email : body.email,
            password : body.password
        }
        })
        return NextResponse.json({
            msg : "Successfully signed up",
            body
        })
    }
    catch(e) { 
        return NextResponse.json({
            message : "Error while signup",
            err : e
            
        },{
        status : 411 
       }
    )
    }
    // hit the database with the usename , password


}