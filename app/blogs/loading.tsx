import BlogLoadingUI from "@/components/loading/BlogLoadingUI"
import CategoriesLoadingUI from "@/components/loading/CategoriesLoadingUI"

const BlogLoading =  ({searchParams}:{
    searchParams:{category:string}
}) => {
    return (
        <div className='px-5  min-h-screen mt-0  flex flex-col justify-start'>
            <div className='w-full p-2 sticky top-[-4px] z-10 bg-white px-6'>
                <h1 className='text-[35px] font-bold '>{"Trending"}</h1>
            </div>
            <div className='w-full flex justify-start items-start'>
                <div className="flex flex-col gap-6  flex-[3.5]">
                    <BlogLoadingUI/>
                    <BlogLoadingUI/>
                    <BlogLoadingUI/>
                    <BlogLoadingUI/>
                </div>
                <div className="flex-[1]">
                    <h1 className='text-[22px] font-bold'>Categories</h1>
                    <div className="flex flex-col gap-4 mt-6 w-full">
                        <CategoriesLoadingUI/>
                        <CategoriesLoadingUI/>
                        <CategoriesLoadingUI/>
                        <CategoriesLoadingUI/>
                        <CategoriesLoadingUI/>
                        <CategoriesLoadingUI/>
                        <CategoriesLoadingUI/>
                        <CategoriesLoadingUI/>
                        <CategoriesLoadingUI/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BlogLoading