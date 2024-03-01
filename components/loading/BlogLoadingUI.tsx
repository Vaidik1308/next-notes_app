import React from 'react'

type Props = {}

const BlogLoadingUI = (props: Props) => {
  return (
    <div className="border-none  rounded-md p-4 w-[85vh] ">
                    <div className="animate-pulse flex space-x-4 w-full">
                        <div className="rounded-sm bg-slate-300 h-52 w-80 "></div>
                        <div className="flex-1 space-y-6 py-1 w-1/2">
                            <div className='w-full space-x-2 grid grid-cols-10 items-center' >
                                <div className='bg-zinc-400 h-4 rounded-sm'></div>
                                <div className='bg-zinc-400 h-4 rounded-sm'></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                            <div className="space-y-3">
        
                                <div className=" grid grid-cols-9  ">
                                    <div className='size-6 rounded-full bg-zinc-300  col-span-1'/>
                                    <div className="h-2 bg-slate-400 rounded w-full col-span-4 mt-2"/>
                                </div>
                                <div className="h-10 bg-slate-300 rounded"></div>
                                <div className='grid grid-cols-5 gap-1'>
                                    <div className='h-2 bg-zinc-300 rounded-sm'/>
                                    <div className='h-2 bg-zinc-300 rounded-sm'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default BlogLoadingUI