import React from 'react'
import SingleBlog from './SingleBlog'

type Props = {}

const BlogsPage = (props: Props) => {
  return (
    <div className=' flex flex-col gap-4 p-4 h-[]'>
        <SingleBlog/>
        <SingleBlog/>
        <SingleBlog/>
    </div>
  )
}

export default BlogsPage