import React from 'react'
import { BsSearch } from 'react-icons/bs'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className=' w-[95%] mx-auto border-b-[2px] border-white flex justify-center items-center pb-1 gap-2'>
        <label htmlFor="">
            <BsSearch/>
        </label>
        <input 
            type="text" 
            name="" 
            id="" 
            placeholder='Search Here..'
            className='w-full bg-transparent outline-none'
        />
    </div>
  )
}

export default SearchBar