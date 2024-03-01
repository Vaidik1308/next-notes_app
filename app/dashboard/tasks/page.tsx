import TaskContainer from "@/components/task/TaskContainer/TaskContainer";
import React from "react";

type Props = {};

const Task = (props: Props) => {
  return <div className="text-black p-2 mx-auto container">
    <div className="w-[20%] flex justify-start border-b-[5px] border-green-300">
      <h1 className="text-[35px] font-bold  ">Your Tasks</h1>
    </div>
    <div>
      <TaskContainer/>
    </div>
  </div>;
};

export default Task;
