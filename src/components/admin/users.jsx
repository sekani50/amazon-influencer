import React, { useState } from "react";

import Container from "../admincontainer/container";
import avatar from "../../assets/svg/avatar.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

function UserManagement() {
  const [actions, setAction] = useState(null);
  return (
      <Container>
        <div className="w-full h-full px-2  sm:px-6 bg-white pt-4 sm:pt-16">
          <h1 className="text-xl font-bold">Users</h1>
          <div className="grid grid-cols-12 gap-5 mt-5 border-b mb-3 p-2 font-bold text-[#9FA2B4]  items-center">
            <div className="col-span-4">Name</div>
            <div className="col-span-3 text-center">Subscription plan</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-1"></div>
          </div>
          {[1, 2, 34, 5, 6, 7, 8].map((v, i) => (
            <Link
              to={"/admin/user/" + v}
              key={i}
              className="grid grid-cols-12 gap-5 border-y py-4 items-center"
            >
              <div className="col-span-4 flex space-x-2 items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="flex flex-col">
                  <h1>Jack Harisson</h1>
                  <p className="text-gray-300">Joined 1 day ago</p>
                </div>
              </div>
              <div className="col-span-3 text-center">Free</div>
              <div className="col-span-2">
                <div className="bg-[#ECECFE] text-[#514EF3] text-center font-xs px-4 py-2 rounded-[100px]">
                  Active
                </div>
              </div>
              <div className="col-span-2">User</div>
              <div className="col-span-1 relative">
                <button
                  onClick={() => {
                    setAction(v);
                  }}
                  className=""
                >
                  <BsThreeDotsVertical />
                </button>
                {actions && (
                  <div
                    className="fixed inset-0"
                    onClick={() => {
                      setAction(null);
                    }}
                  ></div>
                )}
                {actions === v && (
                  <div className="z-[99] font-medium absolute right-20 bg-[#f7f7f7] text-base rounded-lg  w-[200px] flex flex-col">
                    <button className="p-4 hover:bg-gray-300">Edit </button>
                    <button className="p-4 hover:bg-gray-300">
                      {" "}
                      Activate{" "}
                    </button>
                    <button className="p-4 hover:bg-gray-300">
                      {" "}
                      Change role
                    </button>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
  );
}

export default UserManagement;
