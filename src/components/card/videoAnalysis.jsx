import React from "react";
import { useEffect, useState } from "react";
import { MdShowChart, MdOutlineScale, MdShoppingBasket } from "react-icons/md";
import { getVideoSales } from "../../Utils/api";
import { useSelector } from "react-redux";

const VideoAnalysis = ({ url }) => {
  const { token } = useSelector((state) => state.user);
  const [data, setdata] = useState();
  useEffect(() => {
    async function getMetric() {
      await getVideoSales(token, { url })
        .then((res) => {
          console.log(res);
          setdata(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getMetric();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-[98%] mx-auto sm:w-[95%] h-full mb-[12rem] md:mb-[12rem] xl:mb-[2rem]">
      <div className=" w-full grid gap-3 md:gap-12 xl:gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center h-[100px] p-3 ">
        <div className="w-full flex  items-center justify-start space-x-2  h-full px-4 py-2">
          <div className="flex items-center space-x-2 ">
            <div className="w-fit h-fit rounded-lg p-3  bg-[#51CBFF] bg-opacity-20 flex items-center justify-center">
              <div className="rounded-md bg-[#51CBFF] p-1 ">
                <MdShowChart className="text-[25px] text-white" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <span className="text-gray-500 whitespace-nowrap">
              Total Commision Income
            </span>
            <div className=" text-lg sm:text-2xl">
              {data?.total_commission_income || "$0"}
            </div>
          </div>
        </div>
        {/** */}
        <div className="w-full flex items-center justify-start  space-x-2 h-full p-4">
          <div className="flex items-center space-x-2 ">
            <div className="w-fit h-fit rounded-lg p-3 bg-[#23AF72] bg-opacity-20 flex items-center justify-center">
              <div className="rounded-md bg-none p-1 ">
                <MdOutlineScale className="text-[25px] text-[#23AF72]" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <span className="text-gray-500 whitespace-nowrap">
              Total Shipped
            </span>
            <div className=" text-lg sm:text-2xl">
              {data?.total_shipped | "0"}
            </div>
          </div>
        </div>
        {/** */}
        <div className="w-full flex  items-center justify-start space-x-2 h-full p-4">
          <div className="flex items-center space-x-2 ">
            <div className="w-fit h-fit rounded-lg p-3  bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
              <div className="rounded-md bg-none ">
                <MdShoppingBasket className="text-[28px] text-[#FD1F9B]" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <span className="text-gray-500 whitespace-nowrap">
              Total Ordered
            </span>

            <div className="text-lg sm:text-2xl">
              {data?.total_orders || "0"}
            </div>
          </div>
        </div>
        {/** */}
        <div className="w-full flex  items-center justify-start  space-x-2 h-full p-4">
          <div className="flex items-center space-x-2 ">
            <div className="w-fit h-fit rounded-lg p-3  bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
              <div className="rounded-md bg-none ">
                <MdShoppingBasket className="text-[28px] text-[#FD1F9B]" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <span className="text-gray-500 whitespace-nowrap">
              Total Products
            </span>
            <div className=" text-lg sm:text-2xl">
              {data?.total_products || "$0"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAnalysis;
