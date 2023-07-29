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
    <div className="w-full px-6 mx-auto h-full mb-[22rem] sm:mb-[16rem] md:mb-[14rem] xl:mb-[4rem]">
     
          <div className=" w-full grid gap-3 md:gap-12 xl:gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center h-[100px] p-3">
            <div className="w-full flex  items-center justify-center sm:justify-start space-x-2  h-full px-4 py-2">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-lg p-3 bg-[#51CBFF] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-[#51CBFF] p-1 ">
                    <MdShowChart className="text-[25px] text-white" />
                  </div>
                </div>

               
              </div>
              <div className="space-y-3">
              <span className="text-gray-500 whitespace-nowrap">
                    Views
                </span>
              <div className="text-start text-lg sm:text-2xl">{videometric?.views|| '00'}</div>

              </div>
            </div>
            {/** */}
            <div className="w-full flex items-center justify-center sm:justify-start  space-x-2 h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-lg p-2 sm:p-3 bg-[#23AF72] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none p-1 ">
                    <MdOutlineScale className="text-[25px] text-[#23AF72]" />
                  </div>
                </div>

                
              </div>
              <div className="space-y-3">
              <span className="text-gray-500 whitespace-nowrap">
                  Average Views Duration
                </span>
              <div className="text-start text-lg sm:text-2xl">{videometric?.avg_view_duration || '0:00'}</div>

              </div>
            </div>
            {/** */}
            <div className="w-full flex  items-center justify-center sm:justify-start space-x-2 h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-lg p-3 bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none ">
                    <MdShoppingBasket className="text-[28px] text-[#FD1F9B]" />
                  </div>
                </div>

               
              </div>
              <div className="space-y-3">
              <span className="text-gray-500 whitespace-nowrap">
                  Average Viewed 
                </span>
              <div className="text-start text-lg sm:text-2xl">{videometric?.avg_viewed || '0'}</div>

                </div>
            </div>
            {/** */}
            <div className="w-full flex  items-center justify-center sm:justify-start  space-x-2 h-full p-4">
              <div className="flex items-center space-x-2 ">
                <div className="w-fit h-fit rounded-lg p-3  bg-[#FD1F9B] bg-opacity-20 flex items-center justify-center">
                  <div className="rounded-md bg-none ">
                    <MdShoppingBasket className="text-[28px] text-[#FD1F9B]" />
                  </div>
                </div>

               
              </div>
              <div className="space-y-3">
              <span className="text-gray-500 whitespace-nowrap">
                  Summary
                </span>
              <div className="text-start text-lg sm:text-2xl">{videometric?.summary || '0'}</div>
                  
              </div>
            </div>
          </div>
        </div>

  );
};

export default AnalysisCardB;
