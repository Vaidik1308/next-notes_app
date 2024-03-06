'use client'
import { IoTrashBinSharp } from "react-icons/io5";
import { RiFileEditFill } from "react-icons/ri";
import React, { useTransition } from 'react'
import { EditTaskComp } from "../EditTaskComp";
import { Task } from "@/types";
import { deleteTask } from "@/lib/actions/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = Task

const SingleTask = ({
    id,
    title,
    content,
    isCompleted,
    createdAt,
    updatedAt,
    authorEmail
}: Props) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter()
    const onDelete = () => {
        startTransition(async () => {
            deleteTask(id)
            .then((data) => { // here we are calling our action
                if (data?.success)  toast.success(data?.success)
                if(data?.error) toast.error(data?.error)
                // revalidatePath("/dashboard/tasks")
                router.refresh()
            })
        })
    }
  return (
    <div className='w-[95%] h-48 bg-zinc-600 text-white rounded-lg shadow-lg drop-shadow-2xl p-3 flex flex-col items-start justify-between'>
        <div className="w-full">
            <h2 className='font-medium text-xl truncate'>{title}</h2>
            <div className=' w-[100%]  mt-2 min-h-16'>
                <p className='text-sm line-clamp-3  w-[100%] break-words'>{content}</p>
            </div>
        </div>
        <div className="flex flex-col w-full justify-between gap-1">
            <p className="text-sm">
                { updatedAt.toDateString().toString().substring(0,16) || createdAt.toDateString().toString().substring(0,16)}
            </p>
            <div className="flex justify-between">
                {/* <span className="bg-green-500 px-1.5 py-1 flex justify-center items-center rounded-md text-sm">Completed</span> */}
                <span className={`${ isCompleted ? "bg-green-500" : "bg-red-500"} px-2.5 py-1 flex justify-center items-center rounded-md text-sm`}>{isCompleted ? "Completed" :"Incomplete"}</span>
                {/* <span className="bg-red-500 px-1.5 py-1 flex justify-center items-center rounded-md text-sm">Incomplete</span> */}
                <div className="flex gap-3">
                    <EditTaskComp
                        id={id}
                        title={title}
                        content={content}
                        isCompleted={isCompleted}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                        authorEmail={authorEmail}
                    />
                    <button onClick={() =>onDelete()}>
                        <IoTrashBinSharp/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleTask