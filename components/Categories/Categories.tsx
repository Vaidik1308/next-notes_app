import React from 'react'
import SingleCategory from './SingleCategory'
import { Blog, Tag } from '@/types';

type Props = {}
const getTags = async () => {
  const res = await fetch(`http://localhost:3000/api/tags`, {
    cache: "no-cache",
  });
  const tags = (await res.json()) as Tag[];
  return tags;
};


const Categories = async (props: Props) => {

  const tags:Tag[] = await getTags();

  
  return (
    <div className='w-[95%] mx-auto'>
        <h1 className='text-[22px] font-bold'>Categories</h1>
        <div className='w-full mt-4 flex flex-col gap-3 h-[65vh] overflow-y-auto'>
            {
              tags && tags.map((tag:Tag) => (
                <SingleCategory key={tag.id} id={tag.id} label={tag.label} />
              ))
            }
        </div>
    </div>
  )
}

export default Categories