
import { auth } from "@/auth";
import prisma from "@/prisma";
import { Blog } from "@/types";
import { NextResponse } from "next/server";

export const GET = async (request:Request,
    {params} : { params : { email : string } }) => {
    const session = await auth();
    const email = params.email 
    try {
      const blogs:Blog[] = await prisma.blog.findMany({
        where:{
          authorEmail:email 
        },
        orderBy:[
          {updatedAt:"desc"},
          {createdAt:"desc"},
        ]
        
      });
      return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
      console.log(error);
    }
  };