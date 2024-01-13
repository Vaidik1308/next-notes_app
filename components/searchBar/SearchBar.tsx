import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className=" w-[95%] mx-auto border-b-[2px] border-white flex justify-center items-center pb-1 gap-2">
      <label htmlFor="">
        <BsSearch />
      </label>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Here.."
        className="w-full bg-[#F67470] sm:bg-transparent sm:tex outline-none sm:text-gray-400 text-black"
      />
    </div>
  );
};

export default SearchBar;
