'use server'
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const getNotes = async () => {
    // "use server"
    const session = await getAuthSession()
    try{    
        const notes = await prisma.note.findMany({
            where:{
                authorEmail:session?.user?.email as string
            },
            orderBy:{
                createdAt:"desc"
            }
        })
        return notes
    }catch(error){
        console.log(error);
        throw new Error("error in fetching the notes")
        
    }

    
}

export const addNote = async (formData:FormData) => {
    const session = await getAuthSession()
    const authorEmail =await session?.user?.email as string
    const rawData = { 
         content: formData.get("content") as string,
         title: formData.get("title") as string
    }

    

    if(!rawData.title && !rawData.content){
        console.log("please enter the title and content")
        return
    }
    try{
        await prisma.note.create({
            data:{...rawData,authorEmail}
        })
        console.log("note created");
        
        
        
    }catch(error){
        console.log(error);
        throw new Error("Error in adding the notes")
        
    }

    revalidatePath('/dashboard')
    redirect('/dashboard')


}