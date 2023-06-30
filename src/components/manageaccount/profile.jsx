import React from 'react';
import profile from "../../assets/png/lady.jpg";
import { AiOutlineCamera } from "react-icons/ai";

const Profile = () => {
    return (
        <div className="w-[320px] relative sm:ml-[100px] sm:mt-0 mt-[120px] sm:mx-0 mx-auto sm:w-[520px] bg-white flex flex-col sm:flex-row sm:pt-0 sm:pb-0 pt-14 pb-3 sm:py-0 px-6 justify-center items-center sm:justify-end  rounded-2xl shadow-lg h-[300px]">
        <div className="w-[200px] h-[200px] top-[-100px] left-[50px] sm:left-[-100px] sm:top-[50px] rounded-full absolute">
          <img src={profile} alt="" className="w-full h-full rounded-full" />
          <div className="absolute right-0 bottom-[50px]">
            <input
              hidden
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              id="actual-btn"
            />

            <label
              for="actual-btn"
              className="block rounded-full w-[20px] h-[20px] bg-[#005ABC] p-1"
            >
              <AiOutlineCamera className="text-white text-[13px]" />
            </label>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-between space-y-7 sm:space-y-0 sm:justify-around w-full sm:w-[400px] ">
          <div className="space-y-2">
            <div className="font-semibold text-[#005ABC]">
              Sierra Ferguson
            </div>
            <div className="text-[12px] text-gray-500 sm:text-sm">
              ferguson@gmail.com
            </div>
            <div className="text-[12px] text-gray-500 sm:text-sm">
              +234542202141
            </div>
          </div>

          <button className="w-fit px-2 py-2 sm:px-2 sm:py-2 text-white bg-[#005ABC] rounded-md">
            Update Information
          </button>
        </div>
      </div>
    )
}

export default Profile