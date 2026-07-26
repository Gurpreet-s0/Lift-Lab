import React from "react";
import Splits from "../components/Splits";
import { useNavigate } from "react-router";
import UseAuth from "../Hooks/UseAuth";

const EnterSplit = () => {
  const {selectedSplit, setSelectedSplit} = UseAuth()
const navigate = useNavigate()
  const splits = [
    {
      splitName: "PPL",
      detail: "Classic 6-day split. Great for balanced muscle growth.",
      day: 6,
    },
    {
      splitName: "Upper Lower",
      detail: "Train upper and lower body on alternate days.",
      day: 4,
    },
    {
      splitName: "Upper Lower PPL",
      detail: "Train Upper Lower then Push Pull Legs. Great for intermediate lifters.",
      day: 5,
    },
    {
      splitName: "Bro Split",
      detail: "Focus on one muscle group per day.",
      day: "5-6",
    },
    {
      splitName: "Full Body",
      detail: "Train your full body multiple times a week.",
      day: 3,
    },
    {
      splitName: "Custom Split",
      detail: "Create your own customized split.",
      custom: true,
    },
  ];

  const handleNext = () => {
    if (!selectedSplit) {
      alert("Please select a workout split.");
      return;
    }

    navigate("/register/configureSplit");
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="lg:text-4xl text-3xl font-bold mt-5 text-center">
        Let's set up your workout split
      </h1>

      <h2 className="text-text-secondary mb-5 text-center">
        This helps us show you the right workout on the right day.
      </h2>

      <div className="bg-card lg:w-300  w-100 border-2 border-border rounded-2xl flex flex-col items-center pb-10 lg:pb-16 ">
        <h1 className="text-3xl mt-5">Choose your workout split</h1>

        <p className="text-text-secondary mb-8">
          Don't worry, you can change it anytime later.
        </p>

        <div className="flex flex-wrap justify-center gap-8 px-5">
          {splits.map((split) => (
            <Splits
              key={split.splitName}
              {...split}
              selected={selectedSplit === split.splitName}
              onSelect={() => setSelectedSplit(split.splitName)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={!selectedSplit}
        className={`lg:absolute bottom-5 right-20 mt-5 px-6 py-4 rounded-2xl transition-all ${
          selectedSplit
            ? "bg-[#27904fbf] text-[#15c95aeb] cursor-pointer"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default EnterSplit;