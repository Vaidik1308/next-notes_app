
import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { getNotes } from '@/lib/actions/actions';
import Note from './Note';
import { NoteBody } from '@/types';

const bgColor = [
  "bg-[#A1EEBD]",
  "bg-[#DCBFFF]",
  "bg-[#FFF8C9]",
  "bg-[#DBC4F0]",
  "bg-[#CBFFA9]",
  "bg-[#95BDFF]",
]

type Props = {}


const Notes = async (props: Props) => {
  
  const notes:NoteBody[] = await getNotes()
  // console.log(notes);
  return (
    <section className='flex flex-col flex-[2] gap-2 px-6 mt-2 min-h-fit max-h-[70vh]'>
    <span className='text-black font-bold mb-2 flex items-center gap-1'>
      <GiNotebook className="text-[35px]"/>
      <h2 className='text-[35px]'>My Notes</h2>  
    </span>
    <div className=" w-full  max-h-[70vh] overflow-y-auto min-h-fit p-2  flex flex-wrap gap-8 mx-auto  justify-start">
    {
      notes  &&  notes.map((note:NoteBody,i) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.createdAt}
          bgColor={bgColor[Math.floor(Math.random() * bgColor.length)]}
        />
      ))
    }
    </div>
    </section>
  )
}

export default Notes