import React from 'react'
import SingleTask from './SingleTask'

type Props = {}

const TaskContainer = (props: Props) => {
  return (
    <div className='w-full grid grid-cols-4 gap-y-2 overflow-y-auto h-[58vh] mt-4 '>
        <SingleTask/>
        <SingleTask/>
        <SingleTask/>
        <SingleTask/>
        <SingleTask/>
        
    </div>
  )
}

export default TaskContainer