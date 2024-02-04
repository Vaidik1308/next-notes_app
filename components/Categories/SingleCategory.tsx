import { Blog, Tag } from '@/types'
import React from 'react'
import Butn from './Butn'

const getAllBlogs = async () => {
  try{
      const res = await fetch("http://localhost:3000/api/blogs",{cache:'no-store'})
      const {blogs,category} = await res.json()
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
    
  })

  // console.log(blogsPerTag);
  
  return (
    <div>
      {
      blogsPerTag !==0 && (
        
        <div  className='w-full flex  justify-between border-b  border-b-gray-400 border-dashed p-2 px-4 hover:bg-gray-300 transition-all rounded-sm'>
          <Butn id={id} label={label}/>
          <p className='font-medium text-sm text-gray-500 '>{blogsPerTag}</p>
        </div>
            
          )
        }
    </div>
  )
}

export default SingleCategory