import { AddTaskComp } from "@/components/task/AddTaskComp";
import TaskContainer from "@/components/task/TaskContainer/TaskContainer";
import React from "react";

type Props = {};

const Task = (props: Props) => {
  return <div className="text-black p-2 mx-auto container">
    <div className="md:w-[20%] lg:w-[25%] w-[35%] flex justify-start border-b-[5px] border-green-300">
      <h1 className="md:text-[35px] font-bold text-[25px] ">Your Tasks</h1>
    </div>
    <div>
      <TaskContainer/>
    </div>
    <div className="absolute z-10 bottom-10 right-10">
      <AddTaskComp/>
    </div>
  </div>;
};

export default Task;
