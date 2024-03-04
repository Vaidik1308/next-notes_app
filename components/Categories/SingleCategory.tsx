import { Blog, Tag } from '@/types'
import React from 'react'
import Butn from './Butn'
import { getAllBlogs } from '@/lib/data'




const SingleCategory = async ({label,id}: Tag) => {
  
  const blogs:Blog[] = await getAllBlogs()
  let blogsPerTag = 0;
  blogs?.forEach(blog => {
    if(!blog.tagsIds.includes(id)){
      return
    }
    return blogsPerTag = blogsPerTag + 1
  })
  
  return (
    <div className='text-black'>
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