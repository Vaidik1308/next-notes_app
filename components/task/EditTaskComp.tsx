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
import { useState, useTransition } from "react";
import { Switch } from "../ui/switch";
import { AddTaskAction } from "@/lib/actions/actions";
import { useRouter } from "next/navigation";

export function EditTaskComp() {
  const [error,setError] = useState<string | undefined>("")
  const [success,setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const router = useRouter()


  const form  =  useForm<z.infer<typeof taskSchema>>({
    resolver:zodResolver(taskSchema),
    defaultValues:{
      title:"",
      content:"",
      isCompleted:false,
      
    }
  })

  const onSubmit = (values:z.infer<typeof taskSchema>) => {
    setError('')
    setSuccess('')
    console.log(values);
    startTransition(async () => {
      AddTaskAction(values)
      .then((data) => { // here we are calling our action
          setError(data?.error); //action is returning object containing  error and success messages 
          setSuccess(data?.success);
          router.refresh()
      })
  })

  }
  
  return (
    <Dialog >
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
