import { Blog, Tag } from '@/types'
import { relativeDate } from '@/utils'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'

type Props = Blog & {
    authorName:string;
    authImg:string
}
const getTags = async () => {
    const res = await fetch(`http://localhost:3000/api/tags`, {
      cache: "no-cache",
    });
    const tags = (await res.json()) as Tag[];
    return tags;
  };

const SingleBlogUI = async ({title,content,id,createdAt,updatedAt,tagsIds,authorName,authImg}:Props) => {

    const tags = await getTags();

    const blogTags = tags.filter((tag) => tagsIds.includes(tag.id));

    const slicedTag = blogTags.slice(0,2)
  return (
    <section className='bg-white w-full min-h-[30vh] overflow-auto rounded-sm  flex sm:flex-row  flex-col gap-4 '>
        <div className=''>
            <div className='relative sm:h-[100%] h-[350px] w-full  sm:w-[300px] overflow-hidden'>
                <Image src="/assets/blog.jpg" fill alt='blog_img' className='object-cover rounded-lg hover:scale-[1.2]  transition-all'  />
                
            </div>
        </div>
        <div className='flex flex-col gap-1 p-3 pb-1'>
            <div className='flex flex-wrap gap-1 items-center'>
                {
                    blogTags.length > 2 && (
                        slicedTag.map((tag) => (
                        
                            <Link key={tag.id} className="bg-[#F2F8F7] text-black px-2 text-xs py-1 rounded-sm" href={"/"}>{tag.label}</Link>
                        )) 
                    ) 
                }
                {
                blogTags.length <=2 && (
                    blogTags.map((tag) => (
                    <Link key={tag.id} className="bg-[#F2F8F7] text-black px-2 text-xs py-1 rounded-sm" href={"/"}>{tag.label}</Link>
                ))
                )
                } 
            </div>
            
            <div className='w-full'>
                <h1 className='font-[700] leading-tight pr-6 text-[24px]'>
                    {title}
                </h1>
            </div>
            <div className='flex w-full items-center justify-start gap-2'>
                <div className='flex items-center w-fit gap-1.5'>
                    <div className='relative h-[20px] w-[20px]'>
                        <Image src={ authImg  || "/assets/blog.jpg"} fill  alt='blog_img' className='object-cover rounded-[50%]'  />
                    </div>
                    <p className='text-xs text-[#868282] font-bold'>{authorName}</p>
                </div>
                <span className='text-gray-400'>|</span>
                <div className='w-fit text-[11px] text-[#868282] font-bold'>
                    <p>{relativeDate(createdAt)}</p>
                </div>
            </div>
           
            
            <div className='md:w-[60%] min-h-[12vh]'>
                <Markdown className=' break-words text-left text-[#262626] text-[14px] leading-4.5'>
                    {content.length > 150 ? `${content.trim().substring(0, 150)}... ` : content.trim()}
                </Markdown>
            </div>
            <div className='w-full'>
                <Link className='text-[#4CE0D7] flex items-center gap-2' href={`/blogs/${id}`}>
                    <ArrowRightIcon/>
                    <span>Read more</span>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default SingleBlogUI