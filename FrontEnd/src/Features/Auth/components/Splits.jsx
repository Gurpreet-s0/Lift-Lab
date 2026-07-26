import React from "react";

const Splits = ({
  splitName,
  detail,
  day,
  custom,
  selected,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`w-80 h-80 border-2 rounded-2xl flex flex-col justify-evenly items-center cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
        selected
          ? "border-[#27904fbf] "
          : "border-border hover:border-[#27904fbf]"
      }`}
    >
      <h1 className="text-3xl text-center px-4">{splitName}</h1>

      <p className="text-text-secondary text-center w-60">
        {detail}
      </p>

      {custom ? (
        <div className="bg-[#27904fbf] text-[#15c95aeb] px-5 py-3 rounded-xl font-medium">
          Custom
        </div>
      ) : (
        <div className="bg-[#27904fbf] text-[#15c95aeb] px-5 py-3 rounded-xl font-medium">
          {day} days/week
        </div>
      )}
    </div>
  );
};

export default Splits;