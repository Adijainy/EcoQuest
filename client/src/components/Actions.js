import React, { useState } from "react";
import { categories } from "../config/categoryList";
import specialYeti from "../assests/specialYeti.png";
import TaskCard from "./TaskCard";
import { specialTask } from "../config/specialTask";
import newsYeti from "../assests/newsYeti.png";
import PopUpTask from "./PopUpTask";

const Actions = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  console.log(openPopUp);
  return (
    <div className="font-Poppins min-h-[calc(100vh-64px)] text-richgreen-400 px-32 pt-10 flex gap-24 relative overflow-hidden">
      <div className="w-[60%]">
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            Small Steps, Big Change: Start Today!
          </h1>
          <div className="bg-richgreen-50 h-1"></div>
          <h3 className="text-lg my-3 font-semibold">
            Categories:{" "}
            <span>
              {categories.map((category, ind) => (
                <button
                  key={ind}
                  className="text-sm font-normal border-2 rounded-full py-1 px-2 text-gray-500  border-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-150 mx-1"
                >
                  {category}
                </button>
              ))}
            </span>
          </h3>
          <div className="border-2 border-richgreen-50 bg-richgreen-100 bg-opacity-10 rounded-2xl px-6 pt-4 flex">
            <div className="min-w-[33%] relative">
              <h2 className="text-xl font-semibold my-2">
                Boost Your Impact!!
              </h2>
              <p className="text-base leading-5 font-Inter">
                Take part in Special events
                <br />
                to boost your rankings
                <br />
                on community
                <br />
                leader board
              </p>
              <div className="h-24"></div>
              <img
                src={specialYeti}
                alt="special-events"
                className="absolute bottom-0 right-2"
              />
            </div>
            <div className="flex flex-row gap-3 overflow-auto">
              {specialTask.map((task) => (
                <TaskCard
                  key={task._id}
                  data={task}
                  onClickAction={() => {
                    setOpenPopUp(true);
                    setSelectedTask(task);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-3 overflow-auto mt-4">
            {specialTask.map((task) => (
              <TaskCard
                key={task._id}
                data={task}
                onClickAction={() => {
                  setOpenPopUp(true);
                  setSelectedTask(task);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="ml-4 mb-8 text-xl font-medium special-box w-[30%] text-center relative">
        <h2 className="mt-4">
          What's happening
          <br />
          in the world..
        </h2>
        <img
          className="absolute bottom-0 right-0"
          src={newsYeti}
          alt="new-Yeti"
        />
      </div>
      {openPopUp && (
        <PopUpTask
          data={selectedTask}
          handleClosePopUp={() => setOpenPopUp(false)}
        />
      )}
    </div>
  );
};

export default Actions;
