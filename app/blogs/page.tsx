
import Categories from '@/components/Categories/Categories'
import NewBlogPage from '@/components/NewBlogPage/NewBlogPage'
import wait from 'wait'





const BlogPage =  async ({searchParams,}:{
  searchParams:{category:string|undefined,id:string|undefined}
}) => {
  // await wait(10000)
  return (
    <div className='w-full flex md:flex-row flex-col'>
      
      <div className='flex-[3]'>
        
        
        <NewBlogPage tagId={searchParams.id} category={searchParams.category} />
      </div>
      <div className="flex-1  mt-8">
          {/* side bar */}
          <div className='mt-8 w-full flex justify-start p-2'>
            <Categories/>
          </div>
      </div>
    </div>
  )
}

export default BlogPage