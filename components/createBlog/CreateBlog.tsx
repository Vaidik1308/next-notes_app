"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { Tag } from "@/types";
import CreatableReactSelect from "react-select/creatable";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<Tag[] | []>([]);
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
        toast.success("successfully created new tag");
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
      setTags(tags);
    };

    getTags();
  }, []);
  const options = tags.map((tag) => {
    return { label: tag.label, value: tag.id };
  });
  const value = selectedTags?.map((tag) => {
    return { label: tag.label, value: tag.id };
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const tagsIds = selectedTags.map((tag) => tag.id);
    console.log(tagsIds);

    const data = {
      title,
      content,
      tagsIds,
    };
    console.log(data);
    try {
      const res = await fetch(`http://localhost:3000/api/blogs`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("successfully created  blog")
        router.push("/dashboard/blogs/");
        router.refresh()
      }
    } catch (error) {
      console.log(error);
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
          className="bg-[#F8F6E9] text-[20px] flex-[3] outline-none"
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
            setSelectedTags(
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

export default CreateBlog;