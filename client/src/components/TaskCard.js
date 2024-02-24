import React from "react";
import { FaStar, FaArrowCircleDown, FaArrowRight } from "react-icons/fa";

const TaskCard = (props) => {
  const { title, description, points, carbonAvoided } = props.data;
  return (
    <div className="bg-white rounded-md shadow-md text-richgreen-300 text-sm p-4 min-w-52">
      <h4 className="font-semibold">{title}</h4>
      <h5 className="text-xs line-clamp-2 my-3">{description}</h5>
      <button className="text-xs font-normal border-2 rounded-full py-1 px-2 text-orange-500  border-orange-500">
        <FaStar className="text-orange-500 inline" /> {points} Points
      </button>
      <button className="text-xs font-normal border-2 rounded-full py-1 px-2 ml-2 text-orange-500  border-orange-500">
        <FaArrowCircleDown className="text-orange-500 inline" /> {carbonAvoided}{" "}
        kg
      </button>
      <button className="btn-gradient">
        Take Action <FaArrowRight className="inline" />
      </button>
    </div>
  );
};

export default TaskCard;
