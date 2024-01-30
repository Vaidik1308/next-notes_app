import SingleBlogUI from '@/components/NewBlogPage/SingleBlogUI'
// import { getBlogsByCategory } from '@/lib/actions/actions';
import prisma from '@/prisma';
import { Blog } from '@/types';
import React from 'react'

type Props = {}

const getBlogsByCategory = async (tagId:string) => {
  try{
    const res = await fetch(`http://localhost:3000/api/blogs/category/${tagId}`)
    const blogsByTag = await res.json()
    // console.log(blogsByTag);
    return blogsByTag
    
  }catch(error){
    console.log(error);
    
  }
  
}

const BlogByCategory = async ({category,id}:{category:string,id:string}) => {
  
  const blogWithSelectedCategory:Blog[] = await getBlogsByCategory(id)

  // console.log(blogWithSelectedCategory);
  
  

  return (
    <div className='container mx-auto'>
      <div className=' px-4 ml-2'>
        <div className='w-fit border-b-[5px] border-green-200 leading-[45px] mt-4'>
          <h1 className='text-[45px] font-bold '>
          {category.replace('%20'," ").toUpperCase()}
          </h1>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-8 pb-4 mt-4 '>
        { 
            blogWithSelectedCategory.length ? (
                blogWithSelectedCategory.map((blog) => (
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
      {/* Pagination  */}
    </div>
  )
}

export default BlogByCategory