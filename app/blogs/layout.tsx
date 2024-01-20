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
          <main className="flex md:flex-row flex-col ">
            <div className="flex-[3] ">
                {/* main */}
                {children}
            </div>
            <div className="flex-1 bg-red-200 min-w-[280px]">
                {/* side bar */}
            </div>
          </main>
    );
  }