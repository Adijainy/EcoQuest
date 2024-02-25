import React from "react";
import TaskCard from "./TaskCard";
import { specialTask } from "../config/specialTask";
import { useState, useEffect } from "react";
import { getUserTasksOperation } from "../service/operations/taskAPI";
import { useSelector } from "react-redux";

const Progress = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const { token } = useSelector((state) => state.user);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchTasks();
  }, []);
  async function fetchTasks() {
    const formData = new FormData();
    formData.append("userId", user._id);
    const response = await getUserTasksOperation(formData, token);
    setTasks(response);
  }
  return (
    <div className=" pt-16 text-richgreen-400 font-Poppins text-center">
      <h1 className="text-3xl font-semibold mb-2">My Actions</h1>
      <div className="w-3/6 special-box mx-auto flex flex-wrap gap-4 px-10 text-left">
        {tasks &&
          tasks.map((task) => (
            <TaskCard key={task._id} data={task} onClickAction={() => {}} />
          ))}
      </div>
    </div>
  );
};

export default Progress;
