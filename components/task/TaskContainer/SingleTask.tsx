import { IoTrashBinSharp } from "react-icons/io5";
import { RiFileEditFill } from "react-icons/ri";
import React from 'react'
import { EditTaskComp } from "../EditTaskComp";

type Props = {}

const SingleTask = (props: Props) => {
  return (
    <div className='w-72 h-48 bg-zinc-600 text-white rounded-lg shadow-lg drop-shadow-2xl p-3 flex flex-col items-start justify-between'>
        <div>
            <h2 className='font-medium text-xl truncate'>Hello World</h2>
            <div className=' w-full line-clamp-3 mt-2 min-h-16'>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minima rerum nobis cum. Libero nisi amet dignissimos vitae velit ex sit laudantium nulla, est odio enim. Velit, tempora vero? Ducimus?</p>
            </div>
        </div>
        <div className="flex flex-col w-full justify-between gap-1">
            <p className="text-sm">
                12.08.24
            </p>
            <div className="flex justify-between">
                {/* <span className="bg-green-500 px-1.5 py-1 flex justify-center items-center rounded-md text-sm">Completed</span> */}
                <span className="bg-red-500 px-2.5 py-1 flex justify-center items-center rounded-md text-sm">Incomplete</span>
                {/* <span className="bg-red-500 px-1.5 py-1 flex justify-center items-center rounded-md text-sm">Incomplete</span> */}
                <div className="flex gap-3">
                    <EditTaskComp/>
                    <button>
                        <IoTrashBinSharp/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleTask