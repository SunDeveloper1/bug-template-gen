import {NextRequest, NextResponse} from "next/server";

export async function GET (request){
    const greeting = "Hello World!!"
    const json = {
        greeting
    };
    
    return NextResponse.json(json);
}

export async function POST(request){
  
    const data=await request.json();
    console.log("data",data)

    return NextResponse.json(data);
}