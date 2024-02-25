import React from "react";
import { FaStar, FaArrowCircleDown, FaArrowRight } from "react-icons/fa";

const TaskCard = (props) => {
  const { title, description, points, carbonAvoided } = props.data;
  const onClickAction = props.onClickAction;
  return (
    <div className="bg-white rounded-md shadow-lg text-richgreen-300 text-sm p-4 min-w-52 max-w-52 border border-gray-300">
      <h4 className="font-semibold line-clamp-2">{title}</h4>
      <h5 className="text-xs line-clamp-2 my-3">{description[0]}</h5>
      <button className="btn-point">
        <FaStar className="text-orange-500 inline" /> {points} Points
      </button>
      <button className="btn-point ml-2">
        <FaArrowCircleDown className="text-orange-500 inline" /> {carbonAvoided}{" "}
        kg
      </button>
      <button className="btn-gradient" onClick={onClickAction}>
        Take Action <FaArrowRight className="inline" />
      </button>
    </div>
  );
};

export default TaskCard;
