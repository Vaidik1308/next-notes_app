import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLike } from 'react-icons/bi'

type Props = {}

const SingleBlog = (props: Props) => {
  return (
    <section  className='flex justify-start gap-4 bg-white rounded-[10px] overflow-hidden'>
        <div>
            <div className='relative h-[260px] w-[450px] overflow-hidden'>
                <Image 
                    alt='main_pic' 
                    fill 
                    className=' object-cover bg-white overflow-hidden' 
                    src="/assets/scenery.jpg" 
                />
            </div>
        </div>
        <div className='p-4 w-full flex flex-col gap-4'>
            <div className='flex justify-between w-full items-center'>
                <div className='flex items-center gap-2 font-semibold'>
                    <div className='relative h-[30px] w-[30px]'>
                        <Image 
                            fill 
                            src="/assets/profile.jpg" 
                            className='objet-cover rounded-[50%]' 
                            alt='pic'
                        />
                    </div>
                    <h3 className='text-[13px]'>Vaidik Singh Nirwan</h3>
                </div>
                <div className='flex gap-2'>
                    <Link href={"/"} className='text-[12px] bg-[#F5E9D7] px-4 py-1 rounded-lg'>Lifestyle</Link>
                    <Link href={"/"} className='text-[12px] bg-[#F5E9D7] px-4 py-1 rounded-lg'>Education</Link>
                    <Link href={"/"} className='text-[12px] bg-[#F5E9D7] px-4 py-1 rounded-lg'>TRavel</Link>
                </div>
            </div>
            <div className=''>
                <Link href={"/"}>
                    <h1 className='text-[25px] font-bold'>Mastering Color Therapy: Tips to create Vibrant Paintings</h1>
                </Link>
                <p className='text-[15px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem molestiae itaque? Minus autem quam architecto in id aut consequuntur, obcaecati harum esse voluptatibus at veniam, pariatur recusandae ea ipsum.
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <span className='font-semibold text-[14px]'>12 january 2023</span>
                <div className='flex'>
                    <button className='flex items-center gap-1'>
                        <BiLike/>
                        <span>12</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleBlog