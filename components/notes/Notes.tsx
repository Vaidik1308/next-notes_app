import React from "react";
import { GiNotebook } from "react-icons/gi";
import { getNotes } from "@/lib/actions/actions";
import Note from "./Note";
import { NoteBody } from "@/types";
import Image from "next/image";

const bgColor = [
  "bg-[#A1EEBD]",
  "bg-[#DCBFFF]",
  "bg-[#FFF8C9]",
  "bg-[#DBC4F0]",
  "bg-[#CBFFA9]",
  "bg-[#95BDFF]",
];

type Props = {};

const Notes = async (props: Props) => {
  const notes: NoteBody[] = await getNotes();
  // console.log(notes);
  return (
    <section className="flex flex-col flex-[2] gap-2 px-6 mt-1 min-h-fit">
      <span className="text-black font-bold mb-2 flex items-center gap-1">
        <GiNotebook className="text-[35px]" />
        <h2 className="text-[35px]">My Notes</h2>
      </span>
      <div className="w-full flex justify-center mx-auto">
        <div className=" w-[95%] text-black   max-h-[58vh] overflow-y-auto min-h-fit py-2   lg:gap-8   justify-start lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md-1:grid md-1:grid-cols-1 sm:grid sm:grid-cols-1 grid grid-cols-1 xl:grid xl:grid-cols-3  2xl:grid 2xl:grid-cols-4  2xl:w-[100%] 3xl:grid 3xl:grid-cols-4">
          {notes &&
            notes.map((note: NoteBody, i) => (
              <Note
                key={note.id}
                index={i}
                id={note.id}
                title={note.title}
                content={note.content}
                createdAt={note.updatedAt ? note.updatedAt : note.createdAt}
                bgColor={bgColor[Math.floor(Math.random() * bgColor.length)]}
              />
            ))}

          {!notes && (
            <div className="relative h-[300px] w-[300px]">
              <Image
                fill
                alt="empty_img"
                className=" object-cover"
                src="/assets/empty-concept-illustration/3371471.png"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Notes;
