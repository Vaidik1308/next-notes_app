"use client";
import { singleNote, updateNote } from "@/lib/actions/actions";
import { NoteBody, NoteData } from "@/types";
import React, { useState } from "react";
import { BiBookAdd } from "react-icons/bi";

const EditNote = ({ note, noteId }: { note: NoteBody; noteId: string }) => {
  const [title, setTitle] = useState(note.title || "");
  const [content, setContent] = useState(note.content || "");

  if (!note) {
    throw new Error("invalid noteId");
  }

  return (
    <div className="flex-[1.2] bg-[#014C42] shadow-lg  p-3">
      <span className="flex flex-col items-start gap-2 text-[20px]">
        <div className="flex items-center gap-2 text-[25px] text-white">
          <BiBookAdd />
          <h2 className="font-bold">Note Page</h2>
        </div>
        <form
          action={updateNote}
          className="flex flex-col gap-4 w-full  p-4 rounded-lg"
        >
          <input type="text" name="id" value={note.id} hidden />
          <input
            placeholder="Heading"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-md bg-[#014C42] p-1 px-2 w-full text-white text-[45px] outline-none"
          />
          <textarea
            placeholder="content"
            name="content"
            className="rounded-md p-1 px-2 text-white bg-[#014C42] outline-none min-h-[20vh]"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            rows={4}
          />
          <div className="w-full flex jus">
            <button
              type="submit"
              className=" rounded-sm py-1 w-fit bg-[#FBF9F1] p-1 px-4 text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </span>
    </div>
  );
};

export default EditNote;
