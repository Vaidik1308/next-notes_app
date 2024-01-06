
import { getAuthSession } from '@/app/api/auth/[...nextauth]/route'

import Image from 'next/image'
import React from 'react'


type Props = {}

const Profile = async (props: Props) => {

  const session = await getAuthSession()
// console.log(session?.user?.name);



  return (
    <div className='hover:bg-gray-500 transition rounded-lg w-[95%] mx-auto flex justify-between items-center pb-3 p-3'>
        <div className='flex items-center gap-2 '>
            <div className='relative h-[30px] w-[30px]'>
                <Image alt='profile_pic' className='object-cover rounded-[50%]' src={session?.user?.image || "/assets/profile.jpg"} fill />
            </div>
            <p className='text-[15px]'>{session?.user?.name?.substring(0,20)}</p>
        </div>
        
    </div>
  )
}

export default Profile