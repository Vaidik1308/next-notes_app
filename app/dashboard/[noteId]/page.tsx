import EditNote from '@/components/notePage/EditNote'
import { singleNote } from '@/lib/actions/actions'
import { NoteData } from '@/types'
import React from 'react'
// import EditNote from '@/components/editNote/EditNote'

type Props = {}


const NotePage =  async ({params} : {params:{noteId:string}}) => {
  const noteId = params.noteId as string
  console.log(noteId);
  const note = await singleNote(noteId) as NoteData
  console.log(note);

  return (
    <div><EditNote noteId={noteId} note={note} /></div>
  )
}

export default NotePage