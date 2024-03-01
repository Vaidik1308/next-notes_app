import { Tag } from "@/types";

export const getAllBlogs = async () => {
    try{
        const res = await fetch(`http://localhost:3000/api/blogs`,{cache:'no-store'})
        const blogs = await res.json()
        // console.log(blogs);
        // console.log(category);
        
        return blogs
    }catch(error){
        console.log(error);
        
    }
}

export const getTags = async () => {
    const res = await fetch(`http://localhost:3000/api/tags`, {
      cache: "no-cache",
    });
    const tags = (await res.json()) as Tag[];
    return tags;
  };