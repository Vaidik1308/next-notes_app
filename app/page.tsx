import Image from "next/image";
import Link from "next/link";
// import { getAuthSession } from "./api/auth/[...nextauth]/route";
import MainNav from "@/components/MainNav";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth;
  const profilePic = session?.user?.image as string;
  return (
    <main className=" min-h-screen px-5 bg-[#F67470] ">
      
      <MainNav/>
      <div className="flex justify-center items-center ">
        <div>
          <p className="flex flex-col text-[45px] font-semibold">
            <span>Forget About Your</span>
            <span>Messy </span>
          </p>
          <h1 className="text-[65px] flex flex-col font-bold">
            <span>Notes,</span>
            <span>Blogs,</span>
            <span>Tasks,</span>
          </h1>
          <p className="flex flex-col text-[22px] font-bold">
            <span>Papwrite is a open source web app </span>
            <span>developed for the ease of users</span>
          </p>
        </div>
        <div className="relative h-[650px] w-[650px] ">
          <Image
            alt="logo"
            className=" object-contain"
            fill
            src="/assets/papwrite-logos/papwrite-logos_black-removebg.png"
          />
        </div>
      </div>
    </main>
  );
}
