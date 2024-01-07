
import Header from "@/components/Header"
import Navbar from "@/components/navbar/Navbar"
import { ReactNode } from "react"



export default function Layout({
    children,notes
  }: {
    children: React.ReactNode,notes:ReactNode
  }) {
    
    return (
        
        <div className='flex text-white min-h-screen w-full'>
        <Navbar/>
        <div className=' bg-[#F8F6E9] flex-[5] w-full'>
            <div className={'flex'}>
              <Header/>
            </div>
            <div className="flex justify-center flex-col w-full">
              {children}
              {notes}
            </div>
        </div>
        </div> 
    )
  }