import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { getAuthSession } from "../../auth/[...nextauth]/route";

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

export const DELETE = async (req:Request,{params}:{params:{id:string}}) => {
    const id = params.id;
    const session = getAuthSession()
    if(!session){
        return
    }
    try{
        const deleteBlog = await prisma.blog.delete({
            where:{id}
        })
        
        return NextResponse.json(deleteBlog,{status:200})
    }catch(error){
        console.log(error);
        return NextResponse.json({message:"error in deleting the blog"},{status:200})
        
    }
}