import prisma from "@/prisma";
import { Tag } from "@/types";
import { NextResponse } from "next/server";

// export const GET = async (request: Request,{params}:{params:{singleTag:string}}) => {
//     const singleTag = params.singleTag
//     try {
//       const tag = await prisma.tag.findUnique({
//         where:{
//             label:singleTag
//         }
//       });
//       return NextResponse.json(tag, { status: 200 });
//     } catch (error) {
//       console.log(error);
//     }
//   };