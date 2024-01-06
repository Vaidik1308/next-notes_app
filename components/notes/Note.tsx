import Link from 'next/link';
import React from 'react'
import { BsThreeDots } from "react-icons/bs";

type Note = {
    id:string,
    title:string,
    content:string,
    createdAt:Date,
    bgColor:string
}

const Note = ({title,content,createdAt,bgColor,id}:Note) => {
  return (
    <Link href={`/dashboard/${id}`} className={` shadow-lg mb-8 note w-[275px] hover:animate-pulse transition px-3 py-1  h-fit min-h-[25vh] flex flex-col gap-3 rounded-[15px] ${bgColor}  text-black`}>
        <div className='w-full flex justify-between items-center'>
            <span className=' text-[0.8rem] text-gray-700'>{createdAt.toString().substring(0,10)}</span>  
            <span className="text-2xl text-gray-500 hover:text-black transition">
                <BsThreeDots  />
            </span>
        </div>
        <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-[22px] leading-5 break-words'>
            {title.length > 8 ? `${title.substring(0,8)}...` : title}
            </h2>

            {/* //rich text editor */}
            <p className=' text-[14px] w-[78%]'>
                {content.length > 100 ? `${content.substring(0,100)}...` : content}
            </p>
        </div>
        {/* <div className='flex flex-wrap w-[85%] gap-2'>
            <Link className='bg-[#F0FFC6] text-[0.8rem] font-bold rounded-[8px] px-3 py-1' href={"/"}>
                UI
            </Link>
            <Link className='bg-[#F0FFC6] text-[0.8rem] font-bold rounded-[8px] px-3 py-1' href={"/"}>
                webSite
            </Link>
            <Link className='bg-[#F0FFC6] text-[0.8rem] font-bold rounded-[8px] px-3 py-1' href={"/"}>
                Questions
            </Link>
            
            
        </div> */}
    </Link>
  )
}

export default Note