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
    <section className='bg-white w-[300px] h-fit overflow-auto rounded-lg shadow-2xl flex flex-col'>
        <div>
            <div className='relative h-[180px] w-[300px]'>
                <Image src="/assets/blog.jpg" fill alt='blog_img' className='object-cover rounded-lg'  />
                <div className='m-3 absolute text-[13px] px-3 py-[2px] rounded-lg text-white bg-[#262626] '>
                    <Link href={"/"}>FASHION</Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 p-3 pb-4'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex items-center w-fit gap-1.5'>
                    <div className='relative h-[30px] w-[30px]'>
                        <Image src={ authImg  || "/assets/blog.jpg"} fill  alt='blog_img' className='object-cover rounded-[50%]'  />
                    </div>
                    <p className='text-[12px] text-[#868282] font-bold'>{authorName}</p>
                </div>
                <div className='w-fit text-[11px] text-[#868282] font-bold'>
                    <p>{relativeDate(createdAt)}</p>
                </div>
            </div>
            <div className='flex flex-wrap gap-1 items-center'>
                {
                    blogTags && (
                        blogTags.map((tag) => (
                            <div key={tag.id} className='  text-[13px] px-3 py-[2px] rounded-sm text-white bg-[#262626] '>
                                <Link href={"/"}>{tag.label}</Link>
                            </div>
                        ))
                    )
                }
                
            </div>
            <div className='w-full'>
                <h1 className='font-[700] leading-tight pr-6 text-[20px]'>
                    {title}
                </h1>
            </div>
            <div className='w-full'>
                <Markdown className=' break-words text-left text-[#262626] text-[14px] leading-4.5'>
                    {content.length > 150 ? `${content.substring(0, 150)}... ` : content}
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