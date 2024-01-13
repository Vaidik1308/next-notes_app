"use client";
import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Link from "next/link";
import { BsHouse, BsListTask, BsPaperclip } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-[95%] mx-auto flex flex-col gap-4 ">
      <SearchBar />
      <nav className="flex flex-col gap-2 justify-center items-center min-h-fit">
        <Link
          className="rounded-[8px] px-3 py-5 transition flex justify-start items-center gap-2 text-[17px] sm:hover:bg-[#003A33] hover:bg-gray-500 w-full"
          href={"/dashboard"}
        >
          <BsHouse className="text-[22px]" />
          <span className="text-[17px]">Notes</span>
        </Link>
        <Link
          className="rounded-[8px] px-3 py-5 transition flex justify-start items-center gap-2 text-[17px] sm:hover:bg-[#003A33] hover:bg-gray-500 w-full"
          href={"/tasks"}
        >
          <BsListTask className="text-[22px]" />
          <span className="text-[17px]">Tasks</span>
        </Link>
        <Link
          className="rounded-[8px] px-3 py-5 transition flex justify-start items-center gap-2 text-[17px] sm:hover:bg-[#003A33] hover:bg-gray-500 w-full"
          href={"/dashboard/blogs"}
        >
          <BsPaperclip className="text-[22px]" />
          <span className="text-[17px]">Blogs</span>
        </Link>
        <button
          onClick={() => signOut()}
          className="rounded-[8px] px-3 py-5 transition flex justify-start items-center gap-2 text-[17px] sm:hover:bg-[#003A33] hover:bg-gray-500 w-full"
        >
          <BiLogOut className="text-[22px]" />
          <span className="text-[17px]">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
