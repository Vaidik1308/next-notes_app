'use server'
import prisma from "@/prisma"
import {  getAuthSession } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";


export const GET = async (req:Request) => {
    const session = await getServerSession(authOptions)

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





export const POST = async (request:Request) => {
    const session = await getServerSession(authOptions)

    if(!session){
        console.log("not Logged in");
        return
    }
    const {title,content} = await request.json()
    const authorEmail = session.user?.email as string

    if(!title || !content){
        console.log("not Logged in");
        return NextResponse.json({error: "Title and Content are required"},{status:500})
    }
    try{
        const newNote = await prisma.note.create({
            data:{
                title,
                content,
                authorEmail
            }
        })
        console.log("Post Created");
        
        return NextResponse.json(newNote)
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"error in fetching notes"},{status:500})
        
    }
}