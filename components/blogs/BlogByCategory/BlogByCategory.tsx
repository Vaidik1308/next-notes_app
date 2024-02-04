import { getAuthSession } from '@/app/api/auth/[...nextauth]/route';
import SingleBlogUI from '@/components/NewBlogPage/SingleBlogUI'
import { Blog } from '@/types';
import React from 'react'

type Props = Blog & {
  authorName:string;
  authImg:string
}


}

const BlogByCategory = async ({category}:{category:string}) => {
  const session = await getAuthSession()

  if(!session){
    throw new Error("not Authenticated")
  }
  
  // const blogWithSelectedCategory:Blog[] = await getBlogsByCategory(id)
  
  

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
        {/* { 
            blogWithSelectedCategory.length ? (
                blogWithSelectedCategory.map((blog) => (
                    <SingleBlogUI
                        key={blog.id as string}
                        id={blog.id as string}
                        title={blog.title}
                        content={blog.content}
                        createdAt={blog.createdAt}
                        updatedAt ={blog.updatedAt}
                        tagsIds={blog.tagsIds}
                        authorName={blog.author?.name as string}
                        authImg={blog.author?.image as string}
                        likes={blog.likes}
                        authorEmail={blog.authorEmail}
                        img={" "}
                    />
                ))
            ) : (
                <div>
                    <p>Empty</p>
                </div>
            )
        } */}
        </div>
      {/* Pagination  */}
    </div>
  )
}

export default BlogByCategory