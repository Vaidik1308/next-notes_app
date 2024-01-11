import prisma from "@/prisma"
import { Tag } from "@/types"
import { NextResponse } from "next/server"

export const GET =  async (request:Request) => {
    try{
        const tags:Tag[] = await prisma.tag.findMany()
        return NextResponse.json(tags,{status:200})
    }catch(error){
        console.log(error);
        
    }
}

export const POST = async (request:Request) => {
    const {label} = await request.json()

    try{    
        const newTag:Tag = await prisma.tag.create({
            data:{
                label
            }
        })

        console.log("tag created: ",label);
        return NextResponse.json(newTag,{status:200})
        

    }catch(error){
        console.log(error);
        
        return NextResponse.json({message:"error in adding new tag"})

    }
}