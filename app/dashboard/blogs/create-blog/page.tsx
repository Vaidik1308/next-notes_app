import CreateBlog from '@/components/createBlog/CreateBlog'
import React from 'react'

type Props = {}

const NewBlog = (props: Props) => {
  return (
    <div className='w-full'>
        <CreateBlog/>
    </div>
  )
}

export default NewBlog