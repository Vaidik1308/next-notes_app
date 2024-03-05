"use server";
import prisma from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NoteBody } from "@/types";
import { auth } from "@/auth";
import { z } from "zod";
import { taskSchema } from "../schemas/FormSchema";

export const getNotes = async () => {
  // "use server"
  const session = await auth();
  try {
    const notes = await prisma.note.findMany({
      where: {
        authorEmail: session?.user?.email as string,
      },
      orderBy: [
        {
          updatedAt: "desc",
        },
        {
          createdAt: "desc",
        },
      ],
    });
    return notes;
  } catch (error) {
    console.log(error);
    throw new Error("error in fetching the notes");
  }
};

export const singleNote = async (id: string):Promise<NoteBody> => {
  const note = await prisma.note.findUnique({
    where: { id },
  });
  return note as NoteBody;
};

export const updateNote = async (formData: FormData) => {
  const updatedData = {
    content: formData.get("content") as string,
    title: formData.get("title") as string,
    id: formData.get("id") as string,
  };

  try {
    const id = updatedData.id;
    await prisma.note.update({
      where: { id },
      data: {
        title: updatedData.title,
        content: updatedData.content,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const addNote = async (formData: FormData) => {
  const session = await auth();
  const authorEmail = (await session?.user?.email) as string;
  const rawData = {
    content: formData.get("content") as string,
    title: formData.get("title") as string,
  };

  if (!rawData.title && !rawData.content) {
    console.log("please enter the title and content");
    return;
  }
  try {
    await prisma.note.create({
      data: { ...rawData, authorEmail },
    });
    console.log("note created");
  } catch (error) {
    console.log(error);
    throw new Error("Error in adding the notes");
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const deleteNote = async (id: string) => {
  try {
    await prisma.note.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard");
  // redirect('/dashboard')
};




export const getBlogsByCategory = async (tagId:string) => {
  
  try{
    const blogByTag = await prisma.blog.findMany({
      where:{
        tagsIds:{
          has:tagId
        }
      }
    })
    return blogByTag
  }catch(error){
    console.log(error);
    
  }
}



export const AddTaskAction = async(values:z.infer<typeof taskSchema>) => {
  const validateFields = taskSchema.safeParse(values);

  if(!validateFields.success){
    return {error:"invalid Fields"}
  }

  const {title,content,isCompleted} = validateFields.data
  const session = await auth()
  const authorEmail = session?.user?.email as string
  try{
    await prisma.task.create({
      data:{
        title,
        content,
        authorEmail,
        isCompleted
      }
    })
    revalidatePath("/dashboard/tasks")
    return {success:"Created Successfully"}
  }catch(error){
    console.log(error);
    
  }
}


export const deleteTask  = async (id:string) => {
  try {
    await prisma.task.delete({
      where:{
        id
      }
    })
    revalidatePath("/dashboard/tasks")
  }catch(error){
    console.log(error);
    
  }
}