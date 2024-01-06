'use client'
import { addNote } from '@/lib/actions/actions'
import React from 'react'
import { BiBookAdd } from 'react-icons/bi'


type Props = {}

const AddNote = () => {
  
  
  return (
    
        <div className='flex-[1.2] shadow-lg bg-[#A8DF8E] min-h-screen p-3'>
        <span className='flex flex-col items-start gap-2 text-[20px]'>
            <div className='flex items-center gap-2 text-[25px] text-white'>
              <BiBookAdd/>
              <h2 className='font-bold'>New Note</h2>
            </div>
            <form action={addNote} className='flex flex-col gap-4 w-full bg-[#014C42] p-4 rounded-lg' >
              <input 
                placeholder='Heading'
                name='title'
                type="text"
                
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
                className='rounded-md bg-[#014C42] p-1 px-2 w-full text-white text-[45px] outline-none'
              />
              <textarea 
                placeholder='content'
                name='content'
                className='rounded-md p-1 px-2 text-white bg-[#014C42] outline-none min-h-[20vh]'
                // onChange={(e) => setDesc(e.target.value)}
                // value={desc}
                rows={4}
              />
              <div className='w-full flex jus'>
              <button  type='submit' className=' rounded-sm py-1 w-fit bg-[#FBF9F1] p-1 px-4 text-black'>
                Submit
              </button>
              </div>
            </form>
        </span>
    </div>
        
  )
}

export default AddNote