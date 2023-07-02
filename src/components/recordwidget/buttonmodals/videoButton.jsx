import React from "react";

const VideoButton = ({ active }) => {
  return (
    <button className="rounded-[100px] uppercase p-2 bg-[#514EF3] font-semibold text-[12px] sm:text-sm bg-opacity-20 text-[#514EF3]">
      {active ? <span> active</span> : <span> active</span>}
    </button>
  );
};

export default VideoButton;
