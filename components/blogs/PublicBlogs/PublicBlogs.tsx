import SingleBlogUI from '@/components/NewBlogPage/SingleBlogUI'
import { getAllBlogs } from '@/lib/data'
import { Blog } from '@/types'
import React from 'react'

type BlogsData = Blog | {
    authorName?:string|null;
    authImg?:string|null;
}



const filteredBlogs = async (tagId:string,blogs:Blog[]) => {
    if(tagId){
        const filteredBlogs = blogs.filter((blog) => (
            blog.tagsIds.includes(tagId)
        ))
        return filteredBlogs
    }

    return blogs
}
const PublicBlogs =  async ({tagId}:{tagId:string}) => {
    const blogs:Blog[] = await getAllBlogs() 

    const filteredBlogsById:Blog[] = await filteredBlogs(tagId,blogs)
    
    
  return (
    <div className='flex flex-col justify-center items-center gap-8 pb-4 '>
        { 
            filteredBlogsById.length ? (
                filteredBlogsById.map((blog) => (
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