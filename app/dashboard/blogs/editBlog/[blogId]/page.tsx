import EditBlogForm from '@/components/blogs/EditBlogForm';
import { Blog } from '@/types';
import React from 'react'

type Props = {
    params:{blogId:string}
}

const getSingleBlog = async (id:string) => {
    try{
      const res  = await fetch(`http://localhost:3000/api/blogs/${id}`,{
        cache:'no-store'
      })
      const blog = await res.json()
      return blog
    } catch(error){
      console.log(error);
    }
  }
  

const EditBlog = async ({params}: Props) => {

    const singleBlog:Blog = await getSingleBlog(params.blogId)
    console.log(singleBlog);
    
    
  return (
    <div className='text-black'>
        <EditBlogForm singleBlog={singleBlog}  />
    </div>
  )
}

export default EditBlog