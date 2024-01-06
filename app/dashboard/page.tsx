
import Notes from '@/components/notes/Notes'
import { redirect } from 'next/navigation'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import Link from 'next/link'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'

type Props = {}

const Dashboard = async (props: Props) => {
  const session = await getServerSession(authOptions)
  
  
    if(!session){
      redirect("/sign-in")
    }
  return (
    <section className='text-black flex gap-4 min-h-fit relative'>
        <Notes/>

        <Link href={"/dashboard/create-note"} className='fixed right-5 text-[45px] bg-white p-3 rounded-[50%] bottom-5  '>
        <BiPlus/>
        </Link>
        {/* <AddNote/> */}
    </section>
  )
}

export default Dashboard