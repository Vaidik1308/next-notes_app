import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getTags = async () => {
  // 'use server'
  const res = await fetch(`http://localhost:3000/api/tags`, {
    cache: "no-cache",
  });
  const tags = res.json();
  return tags;
};
