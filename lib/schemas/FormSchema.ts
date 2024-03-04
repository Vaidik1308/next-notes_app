import { z } from "zod";

export const taskSchema = z.object({
    title:z.string().trim().min(1,{
      message:"Please enter a title minimum length 1.",
    }),
    isCompleted:z.boolean().default(false),
    content:z.string().trim().min(10,{
      message:"Please enter the minimum content length"
    }).max(300,{
      message:"maximum of 300 characters are allowed"
    }),
  })