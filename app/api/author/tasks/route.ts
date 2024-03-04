import { auth } from "@/auth";
import prisma from "@/prisma";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request:Request) => {

    const session = await auth()
    if(!session){
        redirect("/sign-in")
    }
    try{
        const tasks = await prisma.task.findMany({
            where:{
                authorEmail:session.user?.email as string,
            },
            // include:
        })
        return NextResponse.json(tasks,{status:200})
    }catch(error){
        console.log(error);
        return NextResponse.json({error:"error in fetching the tasks"},{status:401})
    }
}