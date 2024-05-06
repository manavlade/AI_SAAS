// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);
// above code is older one while below is the latest one


import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAi from "openai"

const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(
    req: Request
) {
    try {

        const {userId } = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("UNAUTHORIZED USER 😡", { status: 401 });
        }

        if(!openai.apiKey){
            return new NextResponse("OPENAI API KEY NOT FOUND", {status: 500});
        }

        if(!messages){
            return new NextResponse("MESSAGES ARE REQUIRED", {status: 400})
        }
        
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
        })
    } catch (error) {
        console.log("[CONVERSATION ERROR]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}