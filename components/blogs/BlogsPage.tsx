import React from "react";
import SingleBlog from "./SingleBlog";
import { GiNotebook } from "react-icons/gi";
import { BiPlus } from "react-icons/bi";
import Link from "next/link";
import { Blog } from "@/types";
import { redirect } from "next/navigation";
import { relativeDate } from "@/utils";
import Image from "next/image";
import { auth } from "@/auth";

const getAllBlogs = async (email:string):Promise<Blog[]> => {
  try{
    const res = await fetch(`http://localhost:3000/api/author/blogs/${email}`)
    const blogs = await res.json()
    
    return blogs
  }catch(error){
    console.log(error);
    throw new Error("failed to fetch the blogs")
    
  }
}

const BlogsPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/sign-in");
  }
  const authorEmail = await session.user?.email as string
  const blogs:Blog[] = await getAllBlogs(authorEmail) 

  

  return (
    <section className="w-full relative">
      <div className="flex items-center font-bold p-4">
        <GiNotebook className="text-[35px]" />
        <h2 className="text-[35px]">Your Blogs</h2>
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-col-2 gap-4 p-4  h-[55vh] overflow-y-auto ">
        {blogs.length ? (
          blogs.map((blog) => (
            <SingleBlog
              title={blog.title}
              content={blog.content}
              authorEmail={blog.authorEmail}
              key={blog.id}
              createdAt={relativeDate(blog.createdAt)}
              updatedAt={blog.updatedAt}
              img={""}
              tagsIds={blog.tagsIds}
              id={blog.id}
              author={blog.author}
              likes={blog.likes}
            />
          ))
        ) : (
          <div className="text-black flex flex-col items-center justify-center w-full">
            <div className="relative h-[200px] w-[280px]">
              <Image className="object-contain" fill src="/assets/hand-drawn-no-data-concept/blog_empty.png" alt="empty_blog" />
            </div>
            <h1 className="text-[20px] font-bold">Empty</h1>
          </div>
        )}
      </div>
      <Link
        href={"/dashboard/blogs/create-blog"}
        className="fixed bg-black text-white p-3 rounded-full hover:bg-[#F9F7C9] transition hover:text-black text-[35px] bottom-5 right-3"
      >
        <BiPlus />
      </Link>
    </section>
  );
};

export default BlogsPage;
