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


export const PUT = async (request:Request,{params}:{params:{id:string}}) => {
    console.log(params.id);
    try{
        const {title,content,tagsIds} = await request.json()
        const updatedBlog = await prisma.blog.update({
            where:{
                id:params.id
            },
            data:{
                title,
                content,
                tagsIds
            }
        })

        return NextResponse.json(updatedBlog,{status:200})
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"error in updating"},{status:500})
    }
}