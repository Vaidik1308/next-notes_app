"use client";
import { useOnClickOutside } from "@/hooks/useOnClickOutsite";
import { deleteNote } from "@/lib/actions/actions";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  bgColor: string;
};

const Note = ({ title, content, createdAt, bgColor, id }: Note) => {
  const [show, setShow] = useState(false);

  const deleteRef = useRef<HTMLSpanElement | null>(null);

  // console.log(deleteRef.current?.classList.contains("reference"));
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  useOnClickOutside(deleteRef, () => setShow(false));

  return (
    <section
      className={` shadow-lg mb-8 note lg:w-[340px] xl:w-[260px] hover:animate-pulse transition px-3 py-1  h-fit min-h-[25vh] flex flex-col gap-3 rounded-[15px] ${bgColor}  text-black md:w-[270px] md-1:w-[95%] sm:w-[95%] w-[95%] 3xl:w-[360px] `}
    >
      <div className="w-full flex justify-between items-center">
        <span className=" text-[0.8rem] text-gray-700">
          {createdAt.toString().substring(0, 10)}
        </span>
        <span
          className="text-2xl text-gray-500 hover:text-black transition  relative reference"
          ref={deleteRef}
        >
          <button onClick={() => setShow((prev) => !prev)}>
            <BsThreeDots />
          </button>
          {show && (
            <div className="absolute bg-white p-1 px-4 animate-none hover:bg-black hover:text-white rounded-lg z-1 top-[24px] text-sm right-[-10px] ">
              <button
                onClick={() => {
                  setShow(false);
                  deleteNote(id);
                }}
                className=""
              >
                Delete
              </button>
            </div>
          )}
        </span>
      </div>
      <Link href={`/dashboard/${id}`} className="flex flex-col gap-3">
        <h2 className="font-bold text-[22px] leading-5 break-words">
          {title.length > 18 ? `${title.substring(0, 18)}...` : title}
        </h2>

        {/* //rich text editor */}
        <p className=" text-[14px] w-[78%]">
          {content.length > 100 ? `${content.substring(0, 100)}...` : content}
        </p>
      </Link>
    </section>
  );
};

export default Note;
