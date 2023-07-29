import React, { useContext } from "react";
import { useEffect } from "react";
import { MdShowChart, MdOutlineScale, MdShoppingBasket } from "react-icons/md";
import { getMetrics } from "../../Utils/api";
import { useSelector } from "react-redux";
import { ProductContext } from "../../App";

const AnalysisCard = () => {
  const {token} = useSelector((state) => state.user)
  //const [data, setdata] = useState('')
  const {productmetric, setproductmetric} = useContext(ProductContext)
  useEffect(() => {
    async function getMetric() {
      await getMetrics(token)
        .then((res) => {
          console.log(res);
         // setproductmetric(res.productmetric)
          setproductmetric(res.productmetric)
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
      
          <div className=" w-full grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center h-[100px] p-3">
            <div className="w-full flex flex-col items-start justify-start space-y-2 h-full px-4 py-2">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-full p-2 sm:p-3 bg-[#51CBFF] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-[#51CBFF] p-1 ">
                    <MdShowChart className="text-[15px] sm:text-[28px] text-white" />
                  </div>
                </div>

                <span className="text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                  Items Shipped Revenue
                </span>
              </div>
              <div className="w-[90%] text-center text-lg sm:text-2xl">{productmetric?.shipped_items_revenue|| '$0'}</div>
            </div>
            {/** */}
            <div className="w-full flex flex-col items-start justify-start space-y-2  h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-full p-2 sm:p-3 bg-[#23AF72] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none p-1 ">
                    <MdOutlineScale className="text-[15px] sm:text-[28px] text-[#23AF72]" />
                  </div>
                </div>

                <span className="text-gray-500 whitespace-nowrap">
                  Total Shipped
                </span>
              </div>
              <div className="w-[90%] text-center text-lg sm:text-2xl">{productmetric?.shipped_items | '0'}</div>
            </div>
            {/** */}
            <div className="w-full flex flex-col items-start justify-start space-y-2  h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-full p-2 sm:p-3 bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none ">
                    <MdShoppingBasket className="text-[18px] sm:text-[28px] text-[#FD1F9B]" />
                  </div>
                </div>

                <span className="text-gray-500 whitespace-nowrap">
                  Total Ordered 
                </span>
              </div>
              <div className="w-[90%] text-center text-lg sm:text-2xl">{productmetric?.ordered_items || '0'}</div>
            </div>
            {/** */}
            <div className="w-full flex flex-col items-start justify-start space-y-2 h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-full p-2 sm:p-3 bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none ">
                    <MdShoppingBasket className="text-[18px] sm:text-[28px] text-[#FD1F9B]" />
                  </div>
                </div>

                <span className="text-gray-500 whitespace-nowrap">
                  Summary
                </span>
              </div>
              <div className="w-[90%] text-center text-lg sm:text-2xl">{productmetric?.summary || '$0'}</div>
            </div>
          </div>
        </div>
     
  );
};

export default AnalysisCard;
