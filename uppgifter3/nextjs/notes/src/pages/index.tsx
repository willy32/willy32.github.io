import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Notes from '../_client/components/Notes/Notes'
import useNoteMutation from '../_client/mutations/useNoteMutation'
import useNoteQuery from '../_client/queries/useNoteQuery'

type DataRowProps = {
  id: number,
  title: string,
  content: string,
  date: string
}

export default function Index() {
  const {mutate} = useNoteMutation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    mutate({title: title, content: content});
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full flex-wrap'>
        <input className='border border-1 rounded min-w-80 m-1 h-10 p-2' type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <input className='border border-1 rounded min-w-80 m-1 h-10 p-2 w-2/3' type="text" placeholder="Text content" onChange={(e) => setContent(e.target.value)}/>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded" onClick={addNote}>Add</button>
      </div>
      <Notes />
    </div>
  )
}
