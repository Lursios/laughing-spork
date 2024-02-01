import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";


export const GET = async (request:Request)=> {

    const reply = {

        message: "What's Up Fabio",
        status : "200"
    }
    return NextResponse.json(reply)
};




export const POST = async()=> {

    // this is to send a post request to our database so we accept data from somewhere then we want something to happened
     

    const entry = await prisma.posts.create({
        data: {
            title:"API Testing",
            image:"https://res.cloudinary.com/dz1i63qzt/image/upload/v1701065506/cld-sample-3.jpg",
            content: "This is another way to test something that you wanted",
            publisher:"This is what it is",
            authors:"Just another way for me to do something",
            summary:"This is what you think it's better",
            postype:"Publication",
            link:"www.vercel.com"
        }
    })

    return NextResponse.json({entry})
};


