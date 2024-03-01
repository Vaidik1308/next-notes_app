// 'use client'
import { Blog } from '@/types';
import PublicBlogs from '../blogs/PublicBlogs/PublicBlogs';
import { getAllBlogs } from '@/lib/data';

type Props = {
    blogs:Blog[];
}


const NewBlogPage =  async ({category,tagId}:{category:string|undefined,
    tagId:string|undefined}) => {

    

     
    
  return (
    <div className='px-5  min-h-screen mt-0 '>
        
        <div className='w-full p-2 sticky top-[-4px] z-10 bg-white px-6'>
            <h1 className='text-[35px] font-bold '>{category || "Trending"}</h1>
        </div>
        <div>
            <PublicBlogs tagId={tagId}/>
        </div>
        
    </div>
  )
}

export default NewBlogPage