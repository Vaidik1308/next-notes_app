
import { auth } from "@/auth";
import DeleteBtn from "@/components/DeleteBtn";
import { Blog, Tag } from "@/types";
import { relativeDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import Markdown from "react-markdown";

const getTags = async () => {
  const res = await fetch(`http://localhost:3000/api/tags`, {
    cache: "no-cache",
  });
  const tags = (await res.json()) as Tag[];
  return tags;
};

const getSingleBlog = async (id:string) => {
  try{
    const res  = await fetch(`http://localhost:3000/api/blogs/${id}`)
    const blog = await res.json()
    return blog
  } catch(error){
    console.log(error);
  }
}



const BlogPage =  async ({params}:{params:{blogId:string}}) => {
  const session = await auth();

  const blog:Blog = await getSingleBlog(params.blogId)

  const tags = await getTags();

  const blogTags = tags.filter((tag) => blog.tagsIds.includes(tag.id));

  const date = blog.createdAt 

  
  
  
  return (
    <>
      {
        blog && (
          <div className="text-black p-4 flex flex-col gap-6">
            <div className="flex flex-col items-start gap-1 font-semibold w-full">
              <h1 className="text-[45px] font-semibold">
                {blog.title}
              </h1>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-1">
                  <div className="relative h-[25px] w-[25px]">
                    <Image
                      fill
                      src={ blog?.author?.image ||"/assets/profile.jpg"}
                      className="objet-cover rounded-[50%]"
                      alt="pic"
                    />
                  </div>
                  <h3 className="text-[13px]">{blog?.author?.name}</h3>
                </div>
                {
                  session?.user?.email === blog.authorEmail && (
                    <div className="flex gap-3">
                      <Link
                        href={`/dashboard/blogs/editBlog/${blog.id}`}
                        className="rounded-sm bg-black text-white hover:bg-white hover:text-black transition px-4 py-1 flex items-center gap-1"
                      >
                        <BiEdit />
                        <span>Edit</span>
                      </Link>
                      <DeleteBtn  id={blog.id} />
                    </div> 
                  )
                }
                
              </div>
              <div>
                <p className="text-sm">{relativeDate(blog.createdAt)}</p>
              </div>

              <div className="flex gap-2 mt-4">
                {blogTags && (
                  blogTags.map((tag) => (
                    <Link className="bg-[#3E3232] text-white px-2 text-xs py-1 rounded-sm" key={tag.id} href={"/"}>{tag.label}</Link>
                  ))
                )}
              </div>
            </div>
            <div className="px-4 w-full h-[38vh] overflow-y-auto markdown">
              <Markdown>
                {blog.content}
              </Markdown>
            </div>
          </div>
        )
      }
    </>
  );
};

export default BlogPage;
