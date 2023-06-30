import React from "react";
import { MdShowChart,MdOutlineScale,MdShoppingBasket } from "react-icons/md";

const AnalysisCard = () => {
  return (
    <div className="w-[98%] mx-auto sm:w-[95%] h-full">
         <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
            <div className="min-w-[1000px] rounded-2xl shadow-lg ">
      <div className="rounded-2xl w-full grid gap-3 grid-cols-4 items-center h-[150px] border shadow-2xl bg-white">
        <div className="w-full flex flex-col items-center justify-center space-y-3 h-full px-4 py-2">
          <div className="flex items-center space-x-2 ">
            <div className="w-fit h-fit rounded-full p-2 bg-[#51CBFF] bg-opacity-20 flex items-center justify-center">
              <div className="rounded-md bg-[#51CBFF] p-1 ">
                <MdShowChart className="text-[15px] text-white" />
              </div>
            </div>

            <span className="text-gray-500 whitespace-nowrap">Total number of video views</span>
          </div>
          <div className="text-2xl">150</div>
        </div>
        {/** */}
        <div className="w-full flex flex-col items-center justify-center space-y-3 h-full p-4">
          <div className="flex items-center space-x-2 ">
            <div className="w-fit h-fit rounded-full p-2 bg-[#23AF72] bg-opacity-20 flex items-center justify-center">
              <div className="rounded-md bg-none p-1 ">
                <MdOutlineScale className="text-[15px] text-[#23AF72]" />
              </div>
            </div>

            <span className="text-gray-500 whitespace-nowrap">Average View Duration</span>
          </div>
          <div className="text-2xl">1hr</div>
        </div>
        {/** */}
        <div className="w-full flex flex-col items-center justify-center space-y-3 h-full p-4">
          <div className="flex items-center space-x-2 ">
            <div className="w-fit h-fit rounded-full p-2 bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
              <div className="rounded-md bg-none ">
                <MdShoppingBasket className="text-[18px] text-[#FD1F9B]" />
              </div>
            </div>

            <span className="text-gray-500 whitespace-nowrap">Total Sales</span>
          </div>
          <div className="text-2xl">$43k</div>
        </div>
        {/** */}
        <div className="w-full flex flex-col items-center justify-center space-y-3 h-full p-4">
          <div className="flex items-center space-x-2 ">
            <div className="w-fit h-fit rounded-full p-2 bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
              <div className="rounded-md bg-none ">
                <MdShoppingBasket className="text-[18px] text-[#FD1F9B]" />
              </div>
            </div>

            <span className="text-gray-500 whitespace-nowrap">Commission Earned</span>
          </div>
          <div className="text-2xl">$43k</div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;
