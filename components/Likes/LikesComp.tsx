'use client'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BiLike, BiSolidLike } from 'react-icons/bi'

type Props = {}

// const handleLikes = async (authorEmail:string) => {
//     const session = await getAuthSession()
//     if(!session){
//         redirect("/sign-in")
//     }
//     try{
//         const res = await fetch(`http://localhost:3000/api/blogs`, {
//         method: "POST",
//         body: JSON.stringify(authorEmail),
//         headers: {
//           "Content-type": "application/json",
//         },
//       });
//       if(!res.ok){
//         toast.error("Unable to like the blog")
//       }

//     } catch(error){
//         console.log(error);
        
//     }
// }

const LikesComp = ({likes,authorEmail,id}) => {

    const [isLiked,setIsLiked] = useState(false)
    // useEffect(() =>{
    //    const getLikes = async () => {
    //     try{
    //         const res = await fetch(`http://localhost:3000/api/blogs/${id}/likes`)
    //     }
    //    }
    // })

    const handleLikes = async (authorEmail:string) => {
        const session = await auth()
        if(!session){
            redirect("/sign-in")
        }
        try{
            const res = await fetch(`http://localhost:3000/api/likes`, {
            method: "PUT",
            body: JSON.stringify({authorEmail,id}),
            headers: {
              "Content-type": "application/json",
            },
          });
          if(!res.ok){
            toast.error("Unable to like the blog")
          }
          
        } catch(error){
            console.log(error);
            
        }
    }
  return (
    <div className=' flex items-center gap-2' >
        <BiLike/>
        <BiSolidLike/>
        <span>{likes.length} Likes</span>
    </div>
)
}

export default LikesComp