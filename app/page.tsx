import Image from "next/image";
import Link from "next/link";
import { getAuthSession } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getAuthSession();
  const profilePic = session?.user?.image as string;
  return (
    <main className=" min-h-screen p-5 bg-[#F67470] ">
      <nav className="w-full flex justify-between">
        <h2 className="flex font-bold text-[26px] w-fit">
          <span className="text-white">PAP</span>
          <span>WRITE</span>
        </h2>
        <div className="w-fit ">
          {!session ? (
            <div className="flex gap-2">
              <Link
                href={"/sign-in"}
                className="flex justify-center items-center bg-white px-6  hover:bg-black hover:text-white transition w-fit rounded-sm text-[16px] font-semibold py-2 "
              >
                Sign In
              </Link>
              <Link
                href={"/sign-up"}
                className="flex justify-center items-center bg-white px-6 hover:bg-black hover:text-white transition w-fit rounded-sm text-[16px] font-semibold py-2 "
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <div className="relative h-[50px] w-[50px]">
                <Image
                  fill
                  className="rounded-[50%] object-cover"
                  alt="profilepic"
                  src={profilePic}
                />
              </div>
              <Link
                href={"/dashboard"}
                className="flex justify-center items-center bg-black px-6 hover:bg-white hover:text-black text-white transition w-fit rounded-sm text-[16px] font-semibold py-[2px] "
              >
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </nav>
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
