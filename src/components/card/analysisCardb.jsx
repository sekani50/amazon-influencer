import React, { useContext } from "react";
import { useEffect } from "react";
import { MdShowChart, MdOutlineScale, MdShoppingBasket } from "react-icons/md";
import { getVideoMetric } from "../../Utils/api";
import { useSelector } from "react-redux";
import { VideoContext } from "../../App";

const AnalysisCardB = () => {
  const {token} = useSelector((state) => state.user)
 // const [videometric, setvideometric] = useState('')
  const {videometric, setvideometric} = useContext(VideoContext)
  useEffect(() => {
    async function getMetric() {
      await getVideoMetric(token)
        .then((res) => {
          console.log(res);
          //setvideometric(res.videometric)
          setvideometric(res.videometric)
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
            <div className="w-full flex flex-col items-start justify-start space-y-2  h-full px-4 py-2">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-full sm:p-3 p-2 bg-[#51CBFF] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-[#51CBFF] p-1 ">
                    <MdShowChart className="text-[15px] sm:text-[25px] text-white" />
                  </div>
                </div>

                <span className="text-gray-500 whitespace-nowrap">
                    Views
                </span>
              </div>
              <div className="w-[90%] text-center text-lg sm:text-2xl">{videometric?.views|| '00'}</div>
            </div>
            {/** */}
            <div className="w-full flex flex-col items-start justify-start  space-y-2 h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-full p-2 sm:p-3 bg-[#23AF72] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none p-1 ">
                    <MdOutlineScale className="text-[15px] sm:text-[25px] text-[#23AF72]" />
                  </div>
                </div>

                <span className="text-gray-500 whitespace-nowrap">
                  Average Views Duration
                </span>
              </div>
              <div className="w-[90%] text-center text-lg sm:text-2xl">{videometric?.avg_view_duration || '0:00'}</div>
            </div>
            {/** */}
            <div className="w-full flex flex-col items-start justify-start  space-y-2 h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-full sm:p-3 p-2 bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none ">
                    <MdShoppingBasket className="text-[18px] sm:text-[28px] text-[#FD1F9B]" />
                  </div>
                </div>

                <span className="text-gray-500 whitespace-nowrap">
                  Average Viewed 
                </span>
              </div>
              <div className="w-[90%] text-center text-lg sm:text-2xl">{videometric?.avg_viewed || '0'}</div>
            </div>
            {/** */}
            <div className="w-full flex flex-col items-start justify-start  space-y-2 h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-full sm:p-3 p-2 bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none ">
                    <MdShoppingBasket className="text-[18px] sm:text-[28px] text-[#FD1F9B]" />
                  </div>
                </div>

                <span className="text-gray-500 whitespace-nowrap">
                  Summary
                </span>
              </div>
              <div className="w-[90%] text-center text-lg sm:text-2xl">{videometric?.summary || '0'}</div>
            </div>
          </div>
        </div>

  );
};

export default AnalysisCardB;
