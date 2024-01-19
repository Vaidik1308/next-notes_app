'use client'


import { log } from "console";
import { useRouter } from "next/navigation";
import { BsTrash } from "react-icons/bs";





const DeleteBtn = ({id}:{id:string}) => {
    // console.log(id);
    const router = useRouter()
    const handleDelete = async(id:string) => {
    
        try{
          const res = await fetch(`http://localhost:3000/api/blogs/${id}`,{
          method:"DELETE",
          headers:{
            "Content-type":"application/json"
          },
          
        })
        if(res.ok){
          console.log("post deleted");
          router.push("/dashboard/blogs")
          router.refresh()
        }
        }catch(error){
          console.log(error);
          
        }
    
      }
  
  return (
    <button
        onClick={() => handleDelete(id)}
        className="bg-white hover:bg-red-500 transition hover:text-white rounded-sm  px-4 py-1 flex items-center gap-1"
    >
        <BsTrash />
        <span>Delete</span>
    </button>
)
}

export default DeleteBtn