import React from "react";
import {IoCheckmarkCircleOutline} from 'react-icons/io5'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState } from "react";
import Loader from "../../UI/Loader";
import { useNavigate } from "react-router-dom";

const Basic = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="w-full rounded-xl bg-white font-light shadow-xl h-fit p-4">
        <div className="flex flex-col gap-2  w-full ">
          <div className="text-black font-semibold">Basic</div>
          <h2 className="text-black text-xl sm:text-2xl font-semibold">
            FREE
          </h2>
          <div className="
          text-[12px] sm:text-sm">
            Get limited access to a maximum of 5 videos or product metrics
            and overall analytics.
          </div>
          <div className="flex space-x-2 items-center">
            <IoCheckmarkCircleOutline className="text-[15px] text-[#005CF1]"/>
            <span className="text-[12px] sm:text-sm">5 Videos/Product</span>
          </div>
          <div className="flex space-x-2 items-center">
            <IoCheckmarkCircleOutline className="text-[15px] text-[#005CF1]"/>
            <span className="text-[12px] sm:text-sm">Limited Bandwith</span>
          </div>
          <div className="flex space-x-2 items-center">
            <IoCheckmarkCircleOutline className="text-[15px] text-[#005CF1]"/>
            <span className="text-[12px] sm:text-sm">3 Email Accounts</span>
          </div>
          <div className="flex space-x-2 items-center">
            <IoCheckmarkCircleOutline className="text-[15px] text-[#005CF1]"/>
            <span className="text-[12px] sm:text-sm">24/7 Customer Support</span>
          </div>
          <div className="flex space-x-2 items-center">
            <AiOutlineCloseCircle className="text-[15px] text-red-500"/>
            <span className="text-[12px] sm:text-sm">Daily Backup</span>
          </div>
          <div className="flex space-x-2 items-center">
            <AiOutlineCloseCircle className="text-[15px] text-red-500"/>
            <span className="text-[12px] sm:text-sm">SSL certificate</span>
          </div>
          <div className="w-full flex items-center mt-3 justify-center">
          <button
         onClick={() => {
            navigate("/payment")
          }}
      className="w-full py-2  bg-[#005ABC] font-medium rounded-lg text-white flex justify-center items-center"
    >
      {loading ? <Loader /> : "Choose"}
    </button>
          </div>
        </div>
      </div>
    )
}

export default Basic