import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { Blog, Tag } from "@/types";
import { relativeDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLike } from "react-icons/bi";
import Markdown from 'react-markdown'

type Props = {};
const getTags = async () => {
  const res = await fetch(`http://localhost:3000/api/tags`, {
    cache: "no-cache",
  });
  const tags = (await res.json()) as Tag[];
  return tags;
};
const SingleBlog = async ({
  tagsIds,
  title,
  content,
  likes,
  authorEmail,
  img,
  createdAt,
  updatedAt,
  author,
  id
}: Blog) => {
  const tags = await getTags();

  const blogTags = tags.filter((tag) => tagsIds.includes(tag.id));

  const slicedTag = blogTags.slice(0,2)
  // console.log(slicedTag);

  const session = await getAuthSession();
  const imageUrl = await session?.user?.image;
  return (
    <section className="flex  justify-start gap-1.5 bg-white rounded-[10px] overflow-hidden  h-[230px] w-[600px]  shadow-lg p-1">
      <div className="w-fit p-1">
        <div className="relative h-[210px] items-center w-[260px] overflow-hidden flex justify-center">
          <Image
            alt="main_pic"
            fill
            className=" object-cover bg-white overflow-hidden hover:scale-[1.1] transition"
            src="/assets/blog.jpg"
          />
        </div>
      </div>
      <div className="px-2 pt-0  flex flex-col gap-1.5 w-full justify-between">
        <div className="flex justify-between gap-2  flex-shrink-0 lg:w-[100%] items-start flex-col">
          <div className="flex items-center gap-2 font-semibold w-fit p-1">
            <div className="relative h-[20px] w-[20px] ">
              <Image
                fill
                src={imageUrl || "/assets/profile.jpg"}
                className="objet-cover rounded-[50%] "
                alt="pic"
              />
            </div>
            <h3 className="text-xs">{authorEmail}</h3>
          </div>
          <div className="flex gap-1 w-fit text-black">
            {
                blogTags.length > 2 && (
                    slicedTag.map((tag) => (
                      
                        <Link key={tag.id} className="bg-[#3E3232] text-white px-2 text-xs py-1 rounded-sm" href={"/"}>{tag.label}</Link>
                    )) 
                ) 
            }
            {
              blogTags.length <=2 && (
                blogTags.map((tag) => (
                  <Link key={tag.id} className="bg-[#3E3232] text-white px-2 text-xs py-1 rounded-sm" href={"/"}>{tag.label}</Link>
              ))
              )
            } 
            
          </div>
        </div>
        <div className="min-h-[16vh] w-[100%] flex flex-col justify-between">
          <Link href={`/dashboard/blogs/${id}`}>
            <h1 className="text-[22px] leading-5 mb-1 font-extrabold">{title.length > 30 ? `${title.substring(0,25)}...` : title}</h1>
          </Link>
          <Markdown className="text-[13px] leading-4 h-[12vh] break-words w-[100%]">
            {content.length > 200 ? `${content.substring(0, 200)}... ` : content}
            
          </Markdown>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-extrabold text-[12px] ">
            {createdAt}
          </span>
          <div className="flex">
            <button className="flex items-center gap-1 text-[18px]">
              <BiLike />
              <span>{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;