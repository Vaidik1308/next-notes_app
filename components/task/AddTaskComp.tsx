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
import { Edit3, Plus } from "lucide-react"
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { taskSchema } from "@/lib/schemas/FormSchema";
import { useEffect, useState, useTransition } from "react";
import { Switch } from "../ui/switch";
import { AddTaskAction } from "@/lib/actions/actions";
import { useRouter } from "next/navigation";

export function AddTaskComp() {
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

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [form, open]);

  const onSubmit = (values:z.infer<typeof taskSchema>) => {
    setError('')
    setSuccess('')
    setOpen(false)
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
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button className="size-20 rounded-full " variant="secondary">
          <Plus size={24}/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none bg-zinc-600 text-white">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription className="text-gray-300">
            {"Write your day to day tasks such as office meet, google meet, take medicines,etc"}
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
