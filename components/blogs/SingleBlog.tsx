import { getAuthSession } from '@/app/api/auth/[...nextauth]/route'
import { Blog, Tag } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLike } from 'react-icons/bi'

type Props = {}
const getTags = async () => {
    const res = await fetch(`http://localhost:3000/api/tags`,{
        cache:'no-cache'
    })
    const tags = await res.json() as Tag[]
     return tags
    
    
}
const SingleBlog = async ({tagsIds,title,content,likes,authorEmail,img,createdAt,updatedAt,author} : Blog) => {

    const tags = await getTags()
    
    const blogTags = tags.filter(tag => tagsIds.includes(tag.id))
    console.log(blogTags);

    const session = await getAuthSession()
    const imageUrl = await session?.user?.image
  return (
    <section  className='flex justify-start gap-4 bg-white rounded-[10px] overflow-hidden lg:max-w-[1200px] mx-auto'>
        <div className='flex-1'>
            <div className='relative h-[260px] w-[450px] overflow-hidden'>
                <Image 
                    alt='main_pic' 
                    fill 
                    className=' object-cover bg-white overflow-hidden' 
                    src="/assets/scenery.jpg" 
                />
            </div>
        </div>
        <div className='p-4  flex flex-col gap-4 flex-[4]'>
            <div className='flex justify-between w-[100vw] items-center'>
                <div className='flex items-center gap-2 font-semibold'>
                    <div className='relative h-[30px] w-[30px]'>
                        <Image 
                            fill 
                            src={ imageUrl ||"/assets/profile.jpg" }
                            className='objet-cover rounded-[50%]' 
                            alt='pic'
                        />
                    </div>
                    <h3 className='text-[13px]'>{authorEmail}</h3>
                </div>
                <div className='flex gap-2 '>
                    {
                        blogTags.length && (
                            blogTags.map((tag) => (
                                <Link key={tag.id} href={"/"} className='text-[12px] bg-[#F5E9D7] px-4 py-1 rounded-lg'>{tag.label}</Link>
                            ))
                        )
                    }
                    
                </div>
            </div>
            <div className='min-h-[20vh] w-[85%]'>
                <Link href={"/"}>
                    <h1 className='text-[25px] font-bold'>{title}</h1>
                </Link>
                <p className='text-[15px] break-words w-[60%]'>
                    {content.length > 200 ? content.substring(0,200) : content}
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <span className='font-semibold text-[14px]'>{createdAt.toString().substring(0,16)}</span>
                <div className='flex'>
                    <button className='flex items-center gap-1'>
                        <BiLike/>
                        <span>{likes}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleBlog