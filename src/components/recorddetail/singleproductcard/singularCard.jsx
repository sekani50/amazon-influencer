import React from "react";
import views from "../../../assets/svg/view.svg"
import percent from "../../../assets/svg/percent.svg"
import scale from "../../../assets/svg/scale.svg"
const SingularCard = () => {
    return (
        <div className="w-full items-center grid grid-cols-2 px-4 sm:px-0 gap-4 sm:gap-[11rem] sm:grid-cols-5 ">
              
        <div className="flex space-x-2 items-center">
          <div className="w-[50px] h-[50px] flex p-3 justify-center items-center rounded-md bg-[#51CBFF] bg-opacity-20">
            <div  className="w-[32px] h-[32px]" >
            <img src={views} alt ="" className="w-full h-full " />
            </div>
            </div>
            <div className="flex flex-col justify-start space-y-4">
                <div className="font-extralight">Views</div>
                <h1 className="text-xl sm:text-2xl font-semibold">100</h1>
            </div>

        </div>

        <div className="flex space-x-2 items-center">
          <div className="w-[50px] h-[50px] flex p-3 justify-center items-center rounded-md bg-green-500 bg-opacity-20">
            <div  className="w-[32px] h-[32px]" >
            <img src={scale} alt ="" className="w-full h-full " />
            </div>
            </div>
            <div className="flex flex-col justify-start space-y-4">
                <div className="font-extralight whitespace-nowrap">View Duration</div>
                <h1 className="text-xl sm:text-2xl font-semibold">2hr</h1>
            </div>

        </div>

        <div className="grid grid-cols-6 gap-16 sm:col-span-2 items-center">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-md bg-red-500 bg-opacity-20">
            <div  className="w-[32px] h-[32px]" >
            <img src={percent} alt ="" className="w-full h-full " />
            </div>
            </div>
            <div className="flex flex-col col-span-5 justify-start space-y-4">
                <div className="font-extralight whitespace-nowrap">Associate Product Sales</div>
                <h1 className="text-xl sm:text-2xl font-semibold">$35k</h1>
            </div>

        </div>

      </div>
    )
}

export default SingularCard