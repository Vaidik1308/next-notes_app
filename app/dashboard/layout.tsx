import Header from "@/components/Header";
import MobileNav from "@/components/navbar/MobileNav";
import Navbar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

export default function Layout({
  children,
  notes,
}: {
  children: React.ReactNode;
  notes: ReactNode;
}) {
  return (
    <div className="flex text-white max-h-[100vh] w-full">
      <div className="hidden sm:flex">
        <Navbar />
      </div>
      <div className="flex sm:hidden absolute">
        <MobileNav/>
      </div>
      <div className=" bg-[#F8F6E9] flex-[5] max-h-screen w-full">
        <div className={"flex h-fit"}>
          <Header />
        </div>
        <div className="flex  flex-col w-full h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
