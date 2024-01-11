'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { CiMail } from "react-icons/ci";
import { FaKey ,FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type Props = {}

const LogInSignIn =  (props: Props) => {
  
  return (
    <section className='text-black flex justify-center items-center h-screen flex-col bg-[#864AF9]'>
      <div className='text-[30px] font-bold w-full flex justify-start pl-12'>
        <Link href={".."} className='bg-white shadow-lg w-fit p-2 rounded-[50%] text-red-500'><BsArrowLeft/></Link>
      </div>
      <div className='bg-[#864AF9] shadow-2xl text-white w-[95%] sm:w-[30%] h-[70vh] flex gap-8 flex-col justify-center items-center  py-4 rounded-lg'>
        <h1 className='text-[35px] text-[#332941] font-bold flex justify-center'>Login</h1>
        <form className='text-white flex flex-col w-full sm:w-[95%] mx-auto justify-center items-center h-fit gap-2'>
          <div className='rounded-md h-[7vh] p-2 w-[90%] sm:w-[70%] bg-[#332941] text-white  flex items-center justify-start gap-1 '>
            <label className='text-[25px]' >
              <CiMail/>
            </label>
            <input 
              className=' outline-none  p-1  bg-[#332941]'
              type="email" 
              name="email" 
              placeholder='abc@gmail.com'
            />
          </div>
          <div className='rounded-md h-[7vh] p-2 w-[90%] sm:w-[70%] bg-[#332941] text-white flex items-center justify-start gap-1'>
            <label className='text-[22px]' >
              <FaKey/>
            </label>
            <input 
              className=' outline-none  p-1 bg-[#332941]'
              type="password" 
              name="password" 
              placeholder='password'
            />
          </div>
          <div className='rounded-md h-[7vh] p-2 w-[90%] sm:w-[70%] bg-[#332941] text-white flex items-center justify-start gap-1'>
            <label className='text-[25px]' >
              <FaUser />
            </label>
            <input 
              className=' outline-none  p-1 bg-[#332941]'
              type="name" 
              name="name" 
              placeholder='username'
            />
          </div>
        </form>
        <div className='flex sm:flex-row flex-col items-center sm:justify-center gap-2'>
          <button onClick={() => signIn('google')} className=' h-[5vh] text-[18px] font-semibold flex items-center gap-2 bg-white text-black px-8 py-1 rounded-md'>
            <span><FcGoogle/></span>
            <span>Google</span>
          </button>
          or
          <Link href={"/sign-up"} className='h-[5vh] flex items-center gap-2 bg-white text-black px-9 py-1 rounded-md font-semibold'>
            SignUp
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LogInSignIn