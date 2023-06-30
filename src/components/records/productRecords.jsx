import React from "react";
import { FiImage } from "react-icons/fi";
import RecordWidget from "../recordwidget/recordWidget";
const ProductRecords = ({ tab }) => {
  const isactive = true;
  return (
    <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
      <div className="w-full min-w-[1000px] space-y-3">
        <div className="w-full items-center bg-white px-3 py-3 sm:py-5 grid grid-cols-9 gap-2 text-gray-500">
          <div className="flex space-x-2 items-center col-span-3">
            <FiImage className="text-[#005ABC] text-[25px]" />
            <span>Name</span>
          </div>
          <div>Views</div>
          <div className="col-span-2">Date</div>
          <div>Commission</div>
          <div>Sales</div>
          <div>Status</div>
        </div>
        <RecordWidget
          image={""}
          name={"Apple Airpod Hot 100"}
          views={"100"}
          active={isactive}
          commission={"2000"}
          sales={"1000"}
          tab={tab}
        />
        <RecordWidget
          image={""}
          name={"Apple Airpod Hot 100"}
          views={"100"}
          active={!isactive}
          commission={"2000"}
          sales={"1000"}
          tab={tab}
        />
      </div>
    </div>
  );
};

export default ProductRecords;
