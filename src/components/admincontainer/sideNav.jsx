import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiHome, BiLogOutCircle } from "react-icons/bi";
import { BsCalendar2Minus } from "react-icons/bs";
import profile from "../../assets/png/hijaby.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const SideNav = ({ isNav, setisNav }) => {
  const { pathname } = useLocation();
  // const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setisNav(!isNav);
      }}
      className={`fixed z-[37] inset-y-0 left-0 h-full let swipeInLeft ${
        isNav
          ? "w-full bg-black bg-opacity-50 min-[1024px]:w-[250px]"
          : "max-[1024px]:hidden w-[250px] "
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="px-4 py-3 sm:px-6 sm:py-4 flex flex-col relative items-center h-full w-[250px] cursor-pointer shadow-md bg-white"
      >
        <div className="my-1 justify-center  flex flex-col w-full ">
          <div className="uppercase text-[#005ABC] font-medium my-3 text-[15px] sm:text-lg">
            Amz
          </div>

          <div className="grid w-full items-center my-4 gap-2 grid-cols-6">
            <div className="rounded-full h-[30px] w-[30px]">
              <img
                src={profile}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col justify-start col-span-5">
              <div className="whitespace-nowrap text-ellipsis w-full">
                Seira Ferguson
              </div>
              <div className="text-gray-500">s.ferguson@gmail.com</div>
            </div>
          </div>

          <Link
            to="/admin/dashboard"
            className={` flex space-x-3 justify-start items-center font-medium px-3 my-2 py-2 ${
              pathname.toLocaleLowerCase().includes("admin/dashboard")
                ? "bg-[#005ABC]  rounded-lg text-white"
                : "text-gray-600"
            } `}
          >
            <BiHome className="text-[25px] " />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/users"
            className={`flex space-x-3 justify-start items-center font-medium px-3 my-2 py-2 ${
              pathname.toLocaleLowerCase().includes("user")
                ? "bg-[#005ABC]  rounded-lg text-white"
                : "text-gray-600"
            } `}
          >
            <AiOutlineUser className="text-[25px] " />
            <span>User Management</span>
          </Link>
          <Link
            to="/admin/products"
            className={` flex space-x-3 justify-start items-center font-medium px-3 my-2 py-2 ${
              pathname === "/admin/products"
                ? "bg-[#005ABC]  rounded-lg text-white"
                : "text-gray-600"
            } `}
          >
            <BsCalendar2Minus className="text-[25px] " />
            <span>Product</span>
          </Link>

          <Link
            to="/admin/videos"
            className={` flex space-x-3 justify-start items-center font-medium px-3 my-2 py-2 ${
              pathname === "/admin/videos"
                ? "bg-[#005ABC]  rounded-lg text-white"
                : "text-gray-600"
            } `}
          >
            <div className="w-[25px] ">
              <IoSettingsOutline className="text-[25px]" />
            </div>
            <span>Videos</span>
          </Link>

          <Link
            to="/logout"
            className={`relative flex mt-[20%] space-x-3 justify-start items-center px-3 py-2 font-medium bg-red-600 bg-opacity-[0.15] rounded-lg text-red-500`}
          >
            <BiLogOutCircle className="text-[25px] " />
            <span>Log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
