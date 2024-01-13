import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import React from "react";

type Props = {};

const Header = async (props: Props) => {
  const session = await getAuthSession();
  const date = new Date();
  return (
    <header
      className={
        'pb-2 pl-4 flex flex-col justify-end items-start gap-2 min-h-[30vh] w-full bg-[url("/assets/scenery.jpg")] bg-cover'
      }
    >
      <h1 className=" text-[30px] sm:text-[42px] text-black font-bold font-sans  leading-[50px]">
        Hi , {session?.user?.name}
      </h1>
      <p className="text-gray-500 font-semibold text-[12px] sm:text-[20px]">
        {date.toUTCString().substring(0, 16)}
      </p>
    </header>
  );
};

export default Header;
