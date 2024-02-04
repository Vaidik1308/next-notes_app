import SingleBlogUI from '@/components/NewBlogPage/SingleBlogUI'
import { Blog } from '@/types'
import React from 'react'

type Props = {
    blogs:Blog[]
}

// const getAllBlogs = async () => {
//     try{
//         const res = await fetch(`http://localhost:3000/api/blogs`,{cache:'no-store'})
//         const {blogs,category} = await res.json()
//         console.log(blogs);
        
//         return blogs
//     }catch(error){
//         console.log(error);
        
//     }
// }

const PublicBlogs =  async ({blogs}: Props) => {
    // const blogs:Blog[] = await getAllBlogs()
  return (
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
                        likes={blog.likes}
                    />
                ))
            ) : (
                <>
                    <p>Empty</p>
                </>
            )
        }
    </div>
  )
}

export default PublicBlogs