import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Blog } from "@/types";

export const GET = async () => {
    try{
        const blogs:Blog[] = await prisma.blog.findMany({
            include:{author:{select:{name:true}}}
        })
        return NextResponse.json(blogs,{status:200})
    }catch(error){
        console.log(error);
        
    }
}


export const POST = async (request:Request) => {
    const {title,content,tagsIds} = await request.json()
    const session = await getAuthSession()
    if(!session){
        throw new Error("not authenticated")
        redirect("/sign-in")
    }
    
    const authorEmail= await session.user?.email as string
    try{
        const newBlog = await prisma.blog.create({
            data: {
                title,
                content,
                tagsIds,
                authorEmail,
            },
            
        })

        
        
        console.log("blog created: ",newBlog);
        return NextResponse.json(newBlog,{status:200})
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"Error in publishing your blog"},{status:500})
        
    }   
    

}