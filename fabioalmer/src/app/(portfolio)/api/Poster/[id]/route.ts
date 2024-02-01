import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";


type Params = {
    id:string;
}

export const PATCH = async (request: Request, {params}:{params:Params}) => {
    try {
      // Log the entire request object to inspect the payload and headers 
      const {content} = await request.json();

      const data = {
        content,
        id: params.id,
        result : "success"
      }
  
      // Access the JSON body directly (assuming Content-Type: application/json)
      return NextResponse.json({data})
  
    } catch (error) {
      // Handle any potential errors
      console.error('Error:', error);
  
      // Return an error response
      return NextResponse.error();
    }
  };

  export const DELETE = async (request: Request, {params}:{params:Params}) => {
    try {
      // Log the entire request object to inspect the payload and headers 
        const id = Number(params.id)
        const {content} = await request.json();
        const data = {
            content,
            id: params.id,
            result : "success"
        }

        const checker = await prisma.posts.findUnique({
                where:{id}
            })
        
        if (checker) {

            const entryDeleted = await prisma.posts.delete({
                where:{id}
            })

            return NextResponse.json({data:entryDeleted})
        } else {
            return NextResponse.json({data:"Post Was Not Found"})
        }

    }   catch (error) {
        // Handle any potential errors
            console.error('Error:', error);
        // Return an error response
            return NextResponse.error();
        }
  };


export const GET = async(request:Request,{params}:{params:Params})=> {

    const result = await prisma.posts.findUnique({
        where: {
            id:Number(params.id)
        }
    });

    return NextResponse.json({data:result})
}