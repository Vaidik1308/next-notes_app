import Note from '@/components/notes/Note'
import { getNotes } from '@/lib/actions/actions'
import { NoteBody } from '@/types'
import Image from 'next/image'
import React from 'react'
import wait from 'wait'

type Props = {}

const bgColor = [
    "bg-[#A1EEBD]",
    "bg-[#DCBFFF]",
    "bg-[#FFF8C9]",
    "bg-[#DBC4F0]",
    "bg-[#CBFFA9]",
    "bg-[#95BDFF]",
  ]
  

const NotesPage = async (props: Props) => {
    const notes:NoteBody[] = await getNotes()
    // await wait(3000)

    const notNote = false
  return (
    <div className='w-full flex justify-center mx-auto'>
      
      <div className=" w-[95%] text-black  max-h-[65vh] overflow-y-auto min-h-fit py-2  flex flex-wrap gap-8   justify-start">
      {
        notes  &&  notes.map((note:NoteBody,i) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            createdAt={note.updatedAt ? note.updatedAt : note.createdAt}
            bgColor={bgColor[Math.floor(Math.random() * bgColor.length)]}
          />
        ))
      }

      {!notes && (
        <div className='relative h-[300px] w-[300px]'>
          <Image fill alt='empty_img' className=' object-cover' src="/assets/empty-concept-illustration/3371471.png"/>
        </div>
      )}
      </div>
    </div>
  )
}

export default NotesPage