import BlogsPage from "@/components/blogs/BlogsPage";
import React from "react";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="text-black max-h-screen">
      <BlogsPage />
    </div>
  );
};

export default Blogs;
