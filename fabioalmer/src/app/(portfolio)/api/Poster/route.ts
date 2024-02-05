import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";


export const GET = async (request:Request)=> {

    const reply = {

        message: "What's Up Fabio",
        status : "200"
    }
    return NextResponse.json(reply)
};




