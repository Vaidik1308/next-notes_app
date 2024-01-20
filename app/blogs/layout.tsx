import MainNav from "@/components/MainNav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PAPWRITE: BLOGS",
    description: "Blogs for all",
  };
  
  export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
          <main className="flex flex-col ">
            <MainNav/>
            <div className="flex-[1] ">
                {/* main */}
                {children}
            </div>
            
          </main>
    );
  }