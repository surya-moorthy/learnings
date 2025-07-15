import { NextRequest, NextResponse } from "next/server";


export function GET(req : NextRequest ) {
    
    //do validation here
    //hit the database here

    return NextResponse.json({
        email : "harkirat@gmail.com",
        name : "harkirat"
    })
}

export async function POST(req : NextRequest) {
    // body 
    const body = await req.json();
    // authorization header / headers
     console.log(req.headers.get("authorization"));
    // query parameters
    console.log(req.nextUrl.searchParams.get("name"));

    // hit the database with the usename , password

    return NextResponse.json({
        message : "U are signed up"
    })

}