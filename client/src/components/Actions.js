import React, { useState, useEffect } from "react";
import { categories } from "../config/categoryList";
import specialYeti from "../assests/specialYeti.png";
import TaskCard from "./TaskCard";

import newsYeti from "../assests/newsYeti.png";
import PopUpTask from "./PopUpTask";
import { apiConnector } from "../service/apiConnecter";
import {
  getAllTasksOperation,
  getSpecialTaskOperation,
} from "../service/operations/taskAPI";
import { useSelector } from "react-redux";

const Actions = () => {
  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);
  console.log(user);
  console.log(token);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [climateNews, setClimateNews] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [specialTasks, setSpecialTasks] = useState([]);
  useEffect(() => {
    fetchClimateNews();
    fetchAllTasks();
    fetchSpecialTasks();
  }, []);
  async function fetchSpecialTasks() {
    const response = await getSpecialTaskOperation(token);
    setSpecialTasks(response);
  }
  async function fetchAllTasks() {
    const response = await getAllTasksOperation(token);
    setTasks(response);
    //console.log(response);
  }

  async function fetchClimateNews() {
    let url = "https://climate-news-feed.p.rapidapi.com/";
    let params = {
      limit: "6",
      exclude: "The Guardian",
    };
    const headers = {
      "X-RapidAPI-Key": "d56b1f2effmsh5f29610e2682c33p126cd8jsn6d4e17a18aa7",
      "X-RapidAPI-Host": "climate-news-feed.p.rapidapi.com",
    };
    const response = await apiConnector("GET", url, null, headers, params);
    //console.log(response.data.articles);
    setClimateNews(response.data.articles);
  }

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
              {specialTasks &&
                specialTasks.map((task) => (
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
            {tasks &&
              tasks.map((task) => (
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
        <div>
          {climateNews.map((news, ind) => (
            <div
              key={ind}
              className="border-2 border-richgreen-50 bg-richgreen-100 bg-opacity-10 rounded-2xl px-6 py-2 my-2"
            >
              <h3 className="text-xs font-semibold line-clamp-2">
                {news.title}
              </h3>
            </div>
          ))}
        </div>
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
