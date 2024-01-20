import React from 'react'
import SingleBlogUI from './SingleBlogUI'
import { Blog, Tag } from '@/types'

type Props = {}
const getAllBlogs = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/blogs",{cache:'no-store'})
        const blogs = await res.json()
        return blogs
    }catch(error){
        console.log(error);
        
    }
}



const NewBlogPage = async (props: Props) => {
    const blogs:Blog[] = await getAllBlogs()
    // console.log(blogs);
    
  return (
    <div className='px-5  min-h-screen mt-0 '>
        
        
        <div className='w-full p-2 sticky top-[-4px] z-10 bg-white px-6'>
            <h1 className='text-[35px] font-bold '>Trending</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-8 pb-4 '>
        { 
            blogs.length ? (
                blogs.map((blog) => (
                    <SingleBlogUI
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        content={blog.content}
                        createdAt={blog.createdAt}
                        updatedAt ={blog.updatedAt}
                        tagsIds={blog.tagsIds}
                        authorName={blog.author?.name}
                        authImg={blog.author?.image}
                    />
                ))
            ) : (
                <>
                    <p>Empty</p>
                </>
            )
        }
        </div>
    </div>
  )
}

export default NewBlogPage