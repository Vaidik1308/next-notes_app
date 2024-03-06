'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Edit3 } from "lucide-react"
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { taskSchema } from "@/lib/schemas/FormSchema";
import { useEffect, useState, useTransition } from "react";
import { Switch } from "../ui/switch";
import { AddTaskAction, editTask } from "@/lib/actions/actions";
import { useRouter } from "next/navigation";
import { getTaskById } from "@/lib/data";
import { Task } from "@/types";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";


export  function EditTaskComp({id,
  title,
  content,
  isCompleted,
  createdAt,
  updatedAt,
  authorEmail}:Task) {
  const [error,setError] = useState<string | undefined>("")
  const [success,setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const router = useRouter()


  const form  =  useForm<z.infer<typeof taskSchema>>({
    resolver:zodResolver(taskSchema),
    defaultValues:{
      title,
      content,
      isCompleted
      
    }
  })

  useEffect(  () => {
    if (!open) {
      form.reset();
    }

  }, [form, open]);

  const onSubmit = (values:z.infer<typeof taskSchema>) => {
    setError('')
    setSuccess('')
    setOpen(false)
    // console.log(values);
    startTransition(async () => {
      editTask(values,id)
      .then((data) => { // here we are calling our action
          setError(data?.error); //action is returning object containing  error and success messages 
          setSuccess(data?.success);
          if (data?.success)  toast.success(data?.success)
          if(data?.error) toast.error(data?.error)
          // revalidatePath("/dashboard/tasks")
          router.refresh()
      })
  })

  }

 
  // console.log(taskById);
  
  
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button className="h-8 w-12 " variant="secondary">
          <Edit3 size={12}/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none bg-zinc-600 text-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription className="text-gray-300">
            {"Make changes to your profile here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>
        <Form  {...form}>
          <form  className="" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="text-black"
                      autoFocus={false}
                      placeholder="title here...."
                      {...field}
                      disabled={isPending}
                      // value={title}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}      
            />
            <FormField
              control={form.control}
              name="content"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Input
                      className="text-black"
                      autoFocus={false}
                      placeholder="title here...."
                      {...field}
                      disabled={isPending}
                      // value={content}
                      
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}      
            />
            <FormField
              control={form.control}
              name="isCompleted"
              render={({field}) => (
                <FormItem className="flex items-center  gap-2">
                  <FormLabel className="mt-2">Status</FormLabel>
                  <FormControl>
                    <Switch
                      className="text-black"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}      
            />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
