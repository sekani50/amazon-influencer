import React from "react";
import Container from "../container/container";
import profile from "../../assets/png/hijaby.jpg";
import {IoIosArrowRoundBack} from 'react-icons/io5'
const RecordDetail = () => {
    return (
       <Container>
        <div className="w-full space-y-3 sm:space-y-4 h-full">
            <div className="flex space-x-2 items-center text-[12px] sm:text-sm text-gray-500">
            <IoIosArrowRoundBack className="text-[20px]"/>
            <span>Back</span>
            </div>
            <div className="grid bg-gray-200 p-3 rounded-md grid-cols-6 gap-2 items-center w-[320px] space-x-3">
            <div className="rounded-full h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]">
                <img
                  src={profile}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
                <div className="text-ellipsis whitespace-nowrap w-full">
                    How to make money online
                </div>
            </div>



        </div>
       </Container>
    )
}

export default RecordDetail