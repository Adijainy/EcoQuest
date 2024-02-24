import React from "react";
import { categories } from "../config/categoryList";
import specialYeti from "../assests/specialYeti.png";
import TaskCard from "./TaskCard";
import { specialTask } from "../config/specialTask";

const Actions = () => {
  return (
    <div className="font-Poppins text-richgreen-400 px-32 py-16 flex gap-24">
      <div className="w-[60%]">
        <h1 className="text-3xl font-semibold mb-2">
          Small Steps, Big Change: Start Today!
        </h1>
        <div className="bg-richgreen-50 h-1"></div>
        <h3 className="text-lg my-3 font-semibold">
          Categories:{" "}
          <span>
            {categories.map((category) => (
              <button className="text-sm font-normal border-2 rounded-full py-1 px-2 text-gray-500  border-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-150 mx-1">
                {category}
              </button>
            ))}
          </span>
        </h3>
        <div className="border-2 border-richgreen-50 bg-richgreen-100 bg-opacity-10 rounded-2xl px-6 pt-4 flex">
          <div className="min-w-[33%] relative">
            <h2 className="text-xl font-semibold my-2">Boost Your Impact!!</h2>
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
              <TaskCard data={task} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-2 border-richgreen-50 bg-richgreen-100 bg-opacity-10 rounded-2xl px-6 py-4 w-[30%]">
        <h2>whats happening in world</h2>
      </div>
    </div>
  );
};

export default Actions;
