
import Header from "@/components/Header"
import Navbar from "@/components/navbar/Navbar"



export default function Layout({
    children
  }: {
    children: React.ReactNode
  }) {
    
    return (
        
        <div className='flex text-white min-h-screen'>
        <Navbar/>
        <div className=' bg-[#F8F6E9] flex-[5] '>
            <div className={'flex'}>
              <Header/>
            </div>
            {children}
        </div>
        </div> 
    )
  }