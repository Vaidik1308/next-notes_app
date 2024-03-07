// 'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet";
import Navbar from './Navbar';
import { ArrowRightCircle } from 'lucide-react';

type Props = {}

const MobileNav = (props: Props) => {
  return (
    <Sheet >
          <SheetTrigger className='bg-black rounded-full absolute top-8 left-2'>
            <ArrowRightCircle size={48}/>
          </SheetTrigger>
          <SheetContent className="bg-[#F67470]" side="left">
            <SheetHeader>
              <h1 className="flex font-bold text-[26px] w-fit">
                  <span className="text-white">PAP</span>
                  <span>WRITE</span>
              </h1>
            </SheetHeader>
            <div className="flex py-2 overflow-y-auto h-screen">
              <Navbar />
            </div>
          </SheetContent>
        </Sheet>
  )
}

export default MobileNav