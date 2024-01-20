"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { Blog, Tag } from "@/types";
import CreatableReactSelect from "react-select/creatable";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";






const EditBlogForm = ({singleBlog}:{singleBlog:Blog}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<Tag[] | []>([]);
  const [blogTags, setBlogTags] = useState<Tag[] | []>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[] | []>([]);
  const router = useRouter();
    
  const addTag = async (label: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/tags`, {
        method: "POST",
        body: JSON.stringify({ label }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (res.ok) {
        console.log("successfully created the tag");
        const newTag = await res.json();
        console.log(newTag);

        return newTag;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    const getTags = async () => {
      // 'use server'
      const res = await fetch(`http://localhost:3000/api/tags`, {
        cache: "no-cache",
      });
      const tags = (await res.json()) as Tag[];
      const blogTags = tags.filter((tag) => singleBlog.tagsIds.includes(tag.id));
      setBlogTags(blogTags)
      setTags(tags);
      setTitle(singleBlog.title)
      setContent(singleBlog.content)


    };

    getTags();

  }, [singleBlog,singleBlog.title,singleBlog.content]);
  const options = tags.map((tag) => {
    return { label: tag.label, value: tag.id };
  });
  const value = blogTags?.map((tag) => {
    return { label: tag.label, value: tag.id };
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const tagsIds = blogTags.map((tag) => tag.id);
    // console.log(tagsIds);

    const data = {
      title,
      content,
      tagsIds,
    };
    try {
      const res = await fetch(`http://localhost:3000/api/blogs/${singleBlog.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("updated blog successfully")
        router.push("/dashboard/blogs/");
        router.refresh()
      }
    } catch (error) {
      console.log(error);
      toast.error("error in updating the blog")
    }

  };


 

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] mx-auto my-8 text-black h-fit"
    >
      <input
        type="text"
        className="bg-[#F8F6E9] text-[55px] w-full outline-none"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id=""
      />
      <div className="flex items-start gap-2">
        <textarea
          className="bg-[#F8F6E9] text-[25px] flex-[3] outline-none"
          placeholder="content"
          name="content"
          id=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />
        <CreatableReactSelect
          className={"flex-1 mx-auto"}
          isMulti
          onCreateOption={async (label) => {
            const newTag: Tag = await addTag(label);
            setSelectedTags((prev) => [...prev, newTag]);
          }}
          value={value}
          options={options}
          onChange={(tags) => {
            setBlogTags(
              tags.map((tag) => {
                return { label: tag.label, id: tag.value };
              }),
            );
          }}
        />
      </div>
      <div className="flex w-full justify-between">
        {/* tags components */}
        {/* <div className='flex-1'>
                img Link
            </div> */}
      </div>
      <button
        type="submit"
        className="bg-green-800 p-2 text-white flex items-center justify-center gap-1.5 rounded-lg"
      >
        Publish
        <Send size={16} />
      </button>
    </form>
  );
};

export default EditBlogForm;