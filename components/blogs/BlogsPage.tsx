import React from 'react'
import SingleBlog from './SingleBlog'
import { GiNotebook } from 'react-icons/gi'
import { PlusCircle } from 'lucide-react'
import { BiPlus } from 'react-icons/bi'
import Link from 'next/link'
import prisma from '@/prisma'
import { getAuthSession } from '@/app/api/auth/[...nextauth]/route'
import { Blog } from '@/types'

type Props = {}

const getBlogs = async () => {
  const session = await getAuthSession()

  const userEmail = await session?.user?.email as string

  // if(!res.ok){
  //   throw new Error("error in fetching the blogs")
  // }
  try{
    const res = fetch("http://localhost:3000/api/blogs",{
    cache:'no-cache'
   })
    const blogs:Blog[] = await prisma.blog.findMany({
      where:{
        authorEmail:userEmail
      },
      orderBy:{
        createdAt:"desc"
      }
    })
    return blogs
  }catch(error){
    console.log(error);
    
  }
}

const BlogsPage = async (props: Props) => {

  const blogs = await getBlogs() as Blog[]
  
  return (
    <section className='w-full relative'>
    <div className='flex items-center font-bold'>
      <GiNotebook className="text-[35px]"/>
      <h2 className='text-[35px]'>My Blogs</h2>
    </div>
    <div className=' flex flex-col gap-4 p-4 h-[]'>
        {
          blogs ? (
            blogs.map((blog) => (
              <SingleBlog  
                title={blog.title}
                content={blog.content}
                authorEmail={blog.authorEmail}
                key={blog.id}
                createdAt={blog.createdAt.toUTCString()}
                updatedAt = {blog.updatedAt}
                img={''}
                tagsIds={blog.tagsIds}
                author={blog.author}
                likes={blog.likes}
              />
            ))
          ) : (
            <div>
              Empty
            </div>
          )
        }
    </div>
    <Link href={"/dashboard/blogs/create-blog"} className='fixed bg-black text-white p-3 rounded-full hover:bg-[#F9F7C9] transition hover:text-black text-[35px] bottom-5 right-0'>
      <BiPlus/>
    </Link>
    </section>
  )
}

export default BlogsPage