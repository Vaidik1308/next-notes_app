import Header from "@/components/Header";
import Navbar from "@/components/navbar/Navbar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
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
        <Sheet>
          <SheetTrigger>OPen</SheetTrigger>
          <SheetContent className="bg-[#F67470]" side="left">
            <SheetHeader>
              <h1>
                <h2 className="flex font-bold text-[26px] w-fit">
                  <span className="text-white">PAP</span>
                  <span>WRITE</span>
                </h2>
              </h1>
            </SheetHeader>
            <div className="flex py-2 overflow-y-auto h-screen">
              <Navbar />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className=" bg-[#F8F6E9] flex-[5] max-h-screen w-full">
        <div className={"flex h-fit"}>
          <Header />
        </div>
        <div className="flex justify-center flex-col w-full h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
