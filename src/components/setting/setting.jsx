import React, { useState } from "react";
import Container from "../container/container";
import Profile from "../manageaccount/profile";
import Account from "../manageaccount/account";
const Settings = () => {
  const [active, setactive] = useState(1);
  // const [tab, setTab] = useState("Profile");


  return (
    <Container>
      <div className="w-full h-full px-2  sm:px-6 bg-white  sm:space-y-7">
        <div className="border-b-2 px-2 border-gray-300 mb-4 w-full flex items-center ">
          <div className="flex items-center space-x-8">
            <span
              onClick={() => {
                setactive(0);
                // setTab("Profile");
              }}
              className={`py-2 cursor-pointer ${
                active === 0
                  ? "border-b-[4px] border-[#005ABC] font-bold"
                  : "font-semibold text-gray-500"
              }`}
            >
              Profile
            </span>
            <span
              onClick={() => {
                setactive(1);
                // setTab("Account");
              }}
              className={`py-2 cursor-pointer ${
                active === 1
                  ? "border-b-[4px] border-[#005ABC] font-bold"
                  : "font-semibold text-gray-500"
              }`}
            >
              Account
            </span>
          </div>
        </div>
        
        
       
        <Account/>
        {active === 0 && <Profile/>}
              
      </div>
    </Container>
  );
};

export default Settings;
