import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (request:Request,{params}:{params:{id:string}}) => {
    try{
        const blogByTag = await prisma.blog.findMany({
          where:{
            tagsIds:{
              has:params.id
            },
          },
          include:{author:{select:{name:true,image:true}}}
        })
        return NextResponse.json(blogByTag,{status:200})
      }catch(error){
        console.log(error);
        return NextResponse.json({message:"unable to find the blogs related to this category"},{status:404})
        
      }
}