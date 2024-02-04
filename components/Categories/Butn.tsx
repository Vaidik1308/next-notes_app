'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    label:string;
    id:string
}

const Butn = ({label,id}: Props) => {
    const router = useRouter()
  return (
    <button onClick={() => {
        router.push(`?category=${label}&id=${id}`)
        router.refresh()
    }}  >
        <h2 className='font-semibold text-sm text-gray-500'>
        {label}
        </h2>
    </button>
  )
}

export default Butn