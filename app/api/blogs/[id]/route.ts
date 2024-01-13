import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (request:Request,{ params }: { params: { id: string } }) =>{

    try{
        const blog = await prisma.blog.findUnique({
            where:{id:params.id},
            include:{author:{select:{name:true,image:true}}}
        })
        return NextResponse.json(blog,{status:200})
    }catch(error){
        console.log(error);
        
    }    
    return NextResponse.json({id:params.id},{status:200})
}