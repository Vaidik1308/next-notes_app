import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import {  BsTrash } from 'react-icons/bs'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <div className='text-black p-4 flex flex-col gap-6'>
        <div className='flex flex-col items-start gap-1 font-semibold w-full'>
            <h1 className='text-[45px] font-semibold'>Mastering Color Therapy: Tips to create Vibrant Paintings</h1>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-center gap-1'>
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
                <div className='flex gap-3'>
                    <Link href={"/"} className='rounded-lg bg-[#ECF0F6]  px-4 py-1 flex items-center gap-1'>
                        <BiEdit/>
                        <span>Edit</span>
                    </Link>
                    <Link href={"/"} className='bg-[#ECF0F6] hover:bg-red-500 transition hover:text-white rounded-lg  px-4 py-1 flex items-center gap-1'>
                        <BsTrash/>
                        <span>Delete</span>
                    </Link>
                </div>
            </div>
        </div>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iure tempore mollitia numquam corporis eligendi. Libero commodi ab sint, impedit cupiditate placeat nobis nostrum mollitia sunt cumque error, quos totam.
        </div>
    </div>
  )
}

export default BlogPage