import { Blog, Tag } from '@/types'
import Link from 'next/link'
import React from 'react'

const getAllBlogs = async () => {
  try{
      const res = await fetch("http://localhost:3000/api/blogs",{cache:'no-store'})
      const blogs = await res.json()
      return blogs
  }catch(error){
      console.log(error);
      
  }
}


const SingleCategory = async ({label,id}: Tag) => {
  
  const blogs:Blog[] = await getAllBlogs()
  let blogsPerTag = 0;
  blogs.forEach(blog => {
    if(blog.tagsIds.includes(id)){
      blogsPerTag = blogsPerTag + 1
    }
    return  
  })

  // console.log(blogsPerTag);
  
  return (
    <>
      {
      blogsPerTag !==0 && (
        
        <Link href={`/blogs/${label.toLowerCase()}?id=${id}`} className='w-full flex  justify-between border-b  border-b-gray-400 border-dashed p-2 hover:bg-gray-300 transition-all rounded-sm'>
              <h2 className='font-semibold text-sm text-gray-500'>
                {label}
              </h2>
              <p className='font-medium text-sm text-gray-500 '>{blogsPerTag}</p>
              </Link>
            
          )
        }
    </>
  )
}

export default SingleCategory