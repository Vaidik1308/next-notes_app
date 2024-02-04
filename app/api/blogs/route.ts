import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Blog } from "@/types";

export const GET = async (req:Request) => {
  const session = await getAuthSession();
  // if (!session) {
  //   redirect("/sign-in");
  // }
  const {searchParams} = new URL(req.url)
  const id = await searchParams.get('id') as string
  const category = await searchParams.get("category")
  // console.log(id);
  // console.log(category);
  if(id || category){
    try{
      const blogs = await prisma.blog.findMany({
        where:{
          tagsIds:{
            has:id
          }
        },
        orderBy:{
          createdAt:"desc"
        }
      })
      return NextResponse.json({blogs,category}, { status: 200 });
    }catch(error){
      console.log(error);
      
    }
  }
  try {
    const blogs = await prisma.blog.findMany({
      include: { author: { select: { name:true,image:true } } }, orderBy: {
        createdAt: "desc"
    },
    });
    return NextResponse.json({blogs,category:"Trending"}, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request: Request) => {
  const { title, content, tagsIds } = await request.json();
  const session = await getAuthSession();
  if (!session) {
    redirect("/sign-in");
  }

  const authorEmail = (await session.user?.email) as string;
  try {
    const newBlog = await prisma.blog.create({
      data: {
        title,
        content,
        tagsIds,
        authorEmail,
      },
    });

    console.log("blog created: ", newBlog);
    return NextResponse.json(newBlog, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error in publishing your blog" },
      { status: 500 },
    );
  }
};
