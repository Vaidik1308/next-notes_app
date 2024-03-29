import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const GET = async (req:Request) => {
  const session = await auth();
  const param = req.url 
  const searchParams = new URLSearchParams(param)
  
  try {
    const blogs = await prisma.blog.findMany({
      include: { author: { select: { name:true,image:true } } }, orderBy: {
        createdAt: "desc"
    },
    });
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request: Request) => {
  const { title, content, tagsIds } = await request.json();
  const session = await auth();
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

  return null
};
