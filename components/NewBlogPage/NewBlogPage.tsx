import React from 'react'
import SingleBlogUI from './SingleBlogUI'
import MainNav from '../MainNav'
import { Blog, Tag } from '@/types'
import toast from 'react-hot-toast'

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
    <div className='px-5  min-h-screen mt-1 '>
        <MainNav/>
        <div className='w-fit pb-4'>
            <h1 className='text-[25px] font-bold'>Trending</h1>
        </div>
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-4 py-4 mt-8'>
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