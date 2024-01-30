import toast from "react-hot-toast"
import { getAuthSession } from "../../../auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import prisma from "@/prisma"
import { NextResponse } from "next/server"

export const PUT = async (req:Request) => {
    const session = await getAuthSession()
    const {authorEmail,id} = await req.json()
    if(session?.user?.email !==  authorEmail){
        toast.error("authentication error")
        redirect("/sign-in")
    }
    try{
        const likes = await prisma.blog.update({
            where:{id},
            data:{
                likes:{
                    push:authorEmail
                }
            }
        })
        return NextResponse.json(likes,{status:200})
    }catch(error){
        console.log(error);
        
    }
}
// export const DELETE = async (req:Request,{params}:{params:{id:string,authorEmail:string}}) => {
    
//     try{
//         const updatedBlog = await prisma.blog.fields.likes.;
//         return NextResponse.json(likes,{status:200})
//     }catch(error){
//         console.log(error);
        
//     }
// }