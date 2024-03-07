import React from 'react'
import SingleTask from './SingleTask'
import { getTasks } from '@/lib/data'
import { Task } from '@/types'

type Props = {}

const TaskContainer = async(props: Props) => {
  const tasks:Task[] = await  getTasks()
  return (
    <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-2 overflow-y-auto h-[58vh] mt-4  grid-cols-1'>
        {tasks && (
          tasks.reverse().map((task) => (
            <SingleTask
              key={task.id}
              id={task.id}
              title={task.title}
              content={task.content}
              createdAt={task.createdAt}
              updatedAt={task.updatedAt}
              authorEmail={task.authorEmail}
              isCompleted={task.isCompleted}
            />
          ))
        ) }
        
    </div>
  )
}

export default TaskContainer