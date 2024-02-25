import React, { useState, useRef } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const Profile = () => {
  //calculate percentage reduction in carbon emissions
  const averageCarbonFootprintPerYearInTons = 5;
  const percentageReduction = function calculatePercentageReduction(
    totalCarbonAvoidedInKg,
    averageCarbonFootprintPerYearInTons
  ) {
    const averageCarbonFootprintPerYearInKg =
      averageCarbonFootprintPerYearInTons * 1000;
    const percentageReduction =
      (totalCarbonAvoidedInKg / averageCarbonFootprintPerYearInKg) * 100;
    return percentageReduction;
  };
  // console.log(
  //   "Percentage reduction in carbon emissions: " +
  //     percentageReduction.toFixed(2) +
  //     "%"
  // );

  const [showShare, setShowShare] = useState(false);
  const profileRef = useRef(null);

  return (
    <div className=" pt-16 font-Poppins">
      <div
        className="w-3/6 special-box mx-auto px-10 text-left text-gray-500 text-base relative"
        ref={profileRef}
      >
        <div className="text-left mt-2 mb-2 text-richgreen-400 flex justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-1">Akash Litoriya</h2>
            <h3 className="text-sm mb-3">akashlitoriya8@gmail.com</h3>
          </div>
          <div>
            <button onClick={() => setShowShare(!showShare)}>
              <IoShareSocialSharp className="text-3xl mt-2 text-richgreen-400" />
            </button>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-richgreen-400 mb-1">
          Your Eco Impact
        </h3>
        <div className="bg-richgreen-400 h-[0.1rem] w-44 mb-2"></div>
        <p className="mb-1">
          <span className="highlight">Points: </span>
          Level Up! You've earned{" "}
          <span className="highlight ">350 points </span> for your eco-efforts.
          Keep it up!
        </p>
        <p>
          <span className="highlight">Carbon Countdown: </span> You've helped
          remove <span className="highlight">3.5 kg of CO2</span> , ticking down
          the clock on climate change!
        </p>
        <h3 className="text-xl font-semibold text-richgreen-400 mt-3 mb-1">
          Eco-Hero Status
        </h3>
        <div className="bg-richgreen-400 h-[0.1rem] w-44 mb-2"></div>
        <p>
          You're <span className="highlight"> 35% </span> more eco-conscious
          than the average user! Keep inspiring others!
        </p>
        <h3 className="text-xl font-semibold text-richgreen-400 mt-3 mb-1">
          Badge Bonanza!
        </h3>
        <div className="bg-richgreen-400 h-[0.1rem] w-44 mb-2"></div>
        {/* Share stats component */}
        {showShare && (
          <div className="border border-gray-300 text-center share-stats absolute flex flex-col top-16 p-2 bg-white rounded-md right-[-5rem] w-40 shadow-lg">
            <h3 className="font-semibold">Share your stats:</h3>
            {/* Facebook share button */}
            <button className="btn-green">
              <FacebookShareButton
                url={window.location.href}
                title={`Check out my stats on EcoQuest! I've earned 40 points and  badges!`}
              >
                Facebook
              </FacebookShareButton>
            </button>

            {/* Twitter share button */}
            <button className="btn-green">
              <TwitterShareButton
                url="www.ecoquest.com"
                title={`Check out my stats on EcoQuest! I've earned 40 points and  badges!`}
              >
                Twitter
              </TwitterShareButton>
            </button>

            {/* LinkedIn share button */}
            <button className="btn-green">
              <LinkedinShareButton
                url={window.location.href}
                title={`Check out my stats on EcoQuest! I've earned 40 points and  badges!`}
              >
                LinkedIn
              </LinkedinShareButton>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
