'use client'
import BlogByCategory from '@/components/blogs/BlogByCategory/BlogByCategory'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'


const BlogCategory = ({params}:{params:{category:string}}) => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  // const {replace} = useRouter()
  const paramsUrl = new URLSearchParams(searchParams)
  // console.log(paramsUrl);
  const TagId = paramsUrl.get("id");
  
  // const categoryId = paramsUrl.get("id") as string
  return (
    <div>
      <BlogByCategory id={TagId} category={params.category} />
      {/* {params.category} */}
    </div>
  )
}

export default BlogCategory