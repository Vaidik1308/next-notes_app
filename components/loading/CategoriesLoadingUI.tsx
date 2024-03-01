import React from 'react'

type Props = {}

const CategoriesLoadingUI = (props: Props) => {
  return (
    <div className='grid grid-cols-8 justify-between animate-pulse w-full border-b-[1px] border-gray-300 pb-4'>
        <div className='bg-zinc-300 h-4 w-20 col-span-6 ' />
        <div className='bg-zinc-300 h-4 w-5  col-span-2' />
    </div>
  )
}

export default CategoriesLoadingUI