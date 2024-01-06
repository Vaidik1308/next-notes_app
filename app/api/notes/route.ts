'use server'
import prisma from "@/prisma"
import {  getAuthSession } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server";


export const GET = async (req:Request) => {
    const session = await getAuthSession()

    // if(!session){
    //     console.log("not Logged in");
    //     return
    // }
    try{
        const notes =  await prisma.note.findMany({
            where:{
                authorEmail:session?.user?.email as string
            },
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json(notes,{status:200})
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"error in fetching notes"},{status:500})
        
    }
}




