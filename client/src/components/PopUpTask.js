import React from "react";
import { FaStar, FaArrowCircleDown, FaArrowRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { performTaskOperation } from "../service/operations/taskAPI";
import { useSelector } from "react-redux";
const PopUpTask = (props) => {
  const { token } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const {
    _id,
    title,
    description,
    points,
    carbonAvoided,
    unGoals,
    unGoalDescription,
  } = props.data;
  const onClickAction = props.handleClosePopUp;

  const descList = description[0].split(".,");
  const unGoalList = unGoals[0].split(",");

  async function performTask() {
    const formData = new FormData();
    formData.append("userId", user._id);
    formData.append("taskId", _id);
    const response = await performTaskOperation(formData, token);
    onClickAction();
  }
  return (
    <div className="absolute w-full h-full z-20 top-0 left-0 bg-gray-600 bg-opacity-10 backdrop:blur-sm">
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 text-sm text-gray-800">
        <IoCloseSharp
          className="absolute text-3xl top-4 right-3 text-gray-500 cursor-pointer"
          onClick={onClickAction}
        />
        <h1 class="text-2xl font-semibold text-green-800">{title}</h1>
        <div class="h-1 bg-[#9ADE7B] my-2"></div>
        <ul class="list-disc pl-4">
          {descList.map((desc, ind) => (
            <li key={ind} class="mb-1">
              {desc}
            </li>
          ))}
        </ul>
        <h2 class="text-lg my-2 font-medium text-green-600">
          By completing this action, you directly contribute to
        </h2>
        <div class="flex gap-2">
          {unGoalList.map((goal, ind) => (
            <img
              key={ind}
              alt="UN Goal Icon"
              src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${
                goal <= 9 ? `0${goal}` : goal
              }.jpg`}
              className="w-24"
            />
          ))}
        </div>
        <p class="my-2">{unGoalDescription}</p>
        <p>
          Read more about{" "}
          <span class="font-medium text-green-600 underline">
            The 17 Sustainable Development Goals - UN
          </span>
        </p>
        <button className="btn-point text-base">
          <FaStar className="text-orange-500 inline text-base" /> {points}{" "}
          Points
        </button>
        <button className="btn-point text-base mx-2">
          <FaArrowCircleDown className="text-orange-500 inline text-base" />{" "}
          {carbonAvoided} kg
        </button>
        <button
          className="btn-gradient w-fit px-6 text-base inline"
          onClick={performTask}
        >
          Take Action <FaArrowRight className="inline text-base" />
        </button>
      </div>
    </div>
  );
};

export default PopUpTask;
