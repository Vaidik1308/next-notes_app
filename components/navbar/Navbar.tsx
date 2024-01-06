import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'

type Props = {}

const Navbar = (props: Props) => {
  
  return (
    <div className={' rounded-b-[8px]  bg-[#014C42]  flex-[1]  flex  items-start max-h-[150vh] pt-2 flex-col gap-4 justify-start'} >
        <Profile/>
        <Link href={"/"} className='h-[250px] w-[250px]  relative '>
            <Image
                src="/assets/papwrite-logos/papwrite-logos_black-removebg.png"
                fill
                alt='logo_title'
                className=' object-contain'
            />
        </Link>
        <Sidebar/>
    </div>
  )
}

export default Navbar