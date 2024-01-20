import { getAuthSession } from '@/app/api/auth/[...nextauth]/route'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const MainNav = async (props: Props) => {
    const session = await getAuthSession();
  const profilePic = session?.user?.image as string;
  return (
    <nav className="w-full flex items-center py-2 mx-auto sticky z-[2] sm:justify-between justify-center bg-[#F67470]">
        <Link href={"/"} className="flex font-bold text-[26px] w-fit pl-4">
          <span className="text-white">PAP</span>
          <span>WRITE</span>
        </Link>
        <div className="w-fit hidden sm:flex items-center gap-6 pr-8">
          <ul className='text-[20px] font-medium flex items-center gap-6'>
            <li>
              <Link className='hover:text-white transition' href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className='hover:text-white transition' href={"/blogs"}>
                Blogs
              </Link>
            </li>
            {/* <li>Home</li> */}
          </ul>
          {!session ? (
            <div className="flex gap-2">
              <Link
                href={"/sign-in"}
                className="flex justify-center items-center bg-white px-6  hover:bg-black hover:text-white transition w-fit rounded-sm text-[16px] font-semibold py-2 "
              >
                Sign In
              </Link>
              <Link
                href={"/sign-up"}
                className="flex justify-center items-center bg-white px-6 hover:bg-black hover:text-white transition w-fit rounded-sm text-[16px] font-semibold py-2 "
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <div className="relative h-[50px] w-[50px]">
                <Image
                  fill
                  className="rounded-[50%] object-cover"
                  alt="profilepic"
                  src={profilePic}
                />
              </div>
              <Link
                href={"/dashboard"}
                className="flex justify-center items-center bg-black px-6 hover:bg-white hover:text-black text-white transition w-fit rounded-sm text-[16px] font-semibold py-[2px] "
              >
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </nav>
  )
}

export default MainNav