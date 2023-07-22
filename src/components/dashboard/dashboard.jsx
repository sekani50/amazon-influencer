import React, { useState } from "react";
import Container from "../container/container";
import AnalysisCard from "../card/analysisCard";
import ProductRecords from "../records/productRecords";
import VideoRecords from "../records/videoRecords";
const Dashboard = () => {
  const [active, setactive] = useState(0);
  const [tab, setTab] = useState('Videos')
  return (
    <Container>
      <div className="w-full px-2  sm:px-6 space-y-4 sm:space-y-6 py-4 h-fit">
        <AnalysisCard />

        <div className="border-b-2 px-2 border-gray-300 w-full flex items-center ">
          <div className="flex items-center space-x-8">
            <span
              onClick={() => {
                setactive(0);
                setTab('Videos')
              }}
              className={`py-2 cursor-pointer ${
                active === 0 ? "border-b-[4px] border-[#005ABC] font-bold" : "font-semibold text-gray-500"
              }`}
            >
              Videos
            </span>
            <span
              onClick={() => {
                setactive(1);
                setTab('Products')
              }}
              className={`py-2 cursor-pointer ${
                active === 1 ? "border-b-[4px] border-[#005ABC] font-bold" : "font-semibold text-gray-500"
              }`}
            >
              Products
            </span>
          </div>
        </div>

        {active === 0 && <VideoRecords tab={tab} />}
        {active === 1 && <ProductRecords tab={tab} />}
      </div>
    </Container>
  );
};

export default Dashboard;
