// 'use client'
import { Blog } from '@/types';
import PublicBlogs from '../blogs/PublicBlogs/PublicBlogs';

type Props = {
    category:string | null;
    blogs:Blog[]
}
const getAllBlogs = async () => {
    try{
        const res = await fetch(`http://localhost:3000/api/blogs`,{cache:'no-store'})
        const {blogs,category}:Props = await res.json()
        console.log(blogs);
        console.log(category);
        
        return {blogs,category}
    }catch(error){
        console.log(error);
        
    }
}


const NewBlogPage =  async () => {

    const {blogs,category}:Props = await getAllBlogs()
    
  return (
    <div className='px-5  min-h-screen mt-0 '>
        
        <div className='w-full p-2 sticky top-[-4px] z-10 bg-white px-6'>
            <h1 className='text-[35px] font-bold '>{category}</h1>
        </div>
        <div>
            <PublicBlogs blogs={blogs}/>
        </div>
        
    </div>
  )
}

export default NewBlogPage