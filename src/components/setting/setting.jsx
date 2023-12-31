import React, { useState } from "react";
import Container from "../container/container";
import Profile from "../manageaccount/profile";
import Account from "../manageaccount/account";
import { useLocation } from "react-router-dom";
import AmazonVerification from "../manageaccount/amazonVerification";
const Settings = () => {
  const {state} = useLocation()
  const [active, setactive] = useState(state?.active || 1);
  // const [tab, setTab] = useState("Profile");


  return (
    <Container>
      <div className="w-full h-fit px-2  sm:px-6 bg-white  sm:space-y-7">
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

            <span
              onClick={() => {
                setactive(2);
                // setTab("Profile");
              }}
              className={`py-2 cursor-pointer ${
                active === 2
                  ? "border-b-[4px] border-[#005ABC] font-bold"
                  : "font-semibold text-gray-500"
              }`}
            >
              Amazon Verification
            </span>
          </div>
        </div>
        
        
       
       {active === 1 &&  <Account/>}
        {active === 0 && <Profile/>}
         {active === 2 && <AmazonVerification/>}     
      </div>
    </Container>
  );
};

export default Settings;
