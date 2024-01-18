import React from "react";
import SingleBlog from "./SingleBlog";
import { GiNotebook } from "react-icons/gi";
import { BiPlus } from "react-icons/bi";
import Link from "next/link";
import { Blog } from "@/types";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { relativeDate } from "@/utils";

const getAllBlogs = async (email:string):Promise<Blog[]> => {
  try{
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/author/blogs/${email}`)
    const blogs = await res.json()
    
    return blogs
  }catch(error){
    console.log(error);
    throw new Error("failed to fetch the blogs")
    
  }
}

const BlogsPage = async () => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/sign-in");
  }
  const authorEmail = await session.user?.email as string
  const blogs = await getAllBlogs(authorEmail) as Blog[]


  

  return (
    <section className="w-full relative">
      <div className="flex items-center font-bold p-4">
        <GiNotebook className="text-[35px]" />
        <h2 className="text-[35px]">Your Blogs</h2>
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-col-2 gap-4 p-4  h-[55vh] overflow-y-auto">
        {blogs ? (
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
          <div>Empty</div>
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
