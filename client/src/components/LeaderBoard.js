import React, { useState, useEffect } from "react";
import leaderYeti from "../assests/leaderYeti.png";
import { getLeaderBoardOperation } from "../service/operations/taskAPI";
import { getAllBadgesOperation } from "../service/operations/badgeAPI";

const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [badgeList, setBadgeList] = useState([]);
  useEffect(() => {
    fetchLeaderBoard();
    fetchBadgeList();
  }, []);

  async function fetchBadgeList() {
    const response = await getAllBadgesOperation();
    setBadgeList(response);
  }
  //console.log(badgeList);
  async function fetchLeaderBoard() {
    const response = await getLeaderBoardOperation();
    setLeaderBoard(response);
  }
  //console.log(leaderBoard);
  return (
    <div className="px-32 pt-10 text-richgreen-400 font-Poppins flex gap-20">
      <div className="w-[70%]">
        <div className="special-box pb-0 text-center flex justify-between items-center mb-5">
          <img src={leaderYeti} alt="leaderboard" />
          <div className="flex">
            <h1 className="text-2xl font-semibold mb-3">
              Last Month's <br />
              <span className="text-3xl">MVP!</span>
            </h1>
            <div className="text-left mt-2 ml-3">
              <h2 className="text-xl font-semibold mb-1">Akash Litoriya</h2>
              <h3 className="text-sm mb-3">Total points - 30</h3>
            </div>
          </div>
          <img src={leaderYeti} alt="leaderboard" />
        </div>
        <div className="special-box text-center px-14 h-fit py-6">
          <h1 className="text-3xl font-semibold mb-2">Leader Board</h1>
          <div className="bg-richgreen-50 h-[0.2rem]"></div>
          <table className="h-fit w-full border-spacing-2">
            {leaderBoard.map((user, ind) => (
              <tr key={ind} className="border-b-2 border-richgreen-100">
                <td className="">{ind + 1}</td>
                <td className="">{user.name}</td>
                <td className="">{user.points}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="special-box text-center px-6 w-[27%]">
        <h1 className="text-2xl font-semibold mb-2">Badges</h1>
        <div className="bg-richgreen-50 h-[0.2rem]"></div>
        <div className="flex gap-4 text-left text-gray-800 font-Inter mt-3 text-sm">
          <div className="">
            <h3 className="text-base font-Poppins font-semibold mb-2 text-richgreen-300">
              Points
            </h3>
            <p>50 points</p>
            <p className="my-2">100 points</p>
            <p>150 points</p>
            <p className="my-2">300 points</p>
          </div>
          <div>
            <h3 className="text-base font-Poppins font-semibold mb-2 text-richgreen-300">
              Badges Awarded
            </h3>
            <p>Spouting Seedling</p>
            <p className="my-2">Carbon Conqurer</p>
            <p>Sustanavility superhero</p>
            <p className="my-2">Eco wizard</p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 mt-8">
          {badgeList.map((badge) => (
            <div
              key={badge._id}
              className="flex flex-col max-h-[100px] justify-end items-center"
            >
              <img
                src={badge.badgeURL}
                alt={badge.name}
                className="max-w-[100px]"
              />
              <p>{badge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
