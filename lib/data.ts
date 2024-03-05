import { auth } from "@/auth";
import prisma from "@/prisma";
import { Tag, Task } from "@/types";

export const getAllBlogs = async () => {
    try{
        const res = await fetch(`http://localhost:3000/api/blogs`,{cache:'no-store'})
        const blogs = await res.json()
        // console.log(blogs);
        // console.log(category);
        
        return blogs
    }catch(error){
        console.log(error);
        
    }
}

export const getTags = async () => {
    const res = await fetch(`http://localhost:3000/api/tags`, {
      cache: "no-cache",
    });
    const tags = (await res.json()) as Tag[];
    return tags;
  };


//task Data
export const getTasks = async () => {
    const session = await auth()
    const res = await prisma.task.findMany({
        where:{
            authorEmail:session?.user?.email as string
        }
    })
    
    return res as Task[]
}