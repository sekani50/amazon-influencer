import React, { useEffect } from "react";
import Container from "../container/container";
import profile from "../../assets/png/products.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlayCircle } from "react-icons/ai";
import SingularCard from "./singleproductcard/singularCard";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleVideo } from "../../Utils/api";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";
import empty from "../../assets/png/emptyorder.png"
import RecordWidgetC from "../recordwidget/recordWidgetc";
import { toast } from "react-hot-toast";
import { notVerified, notVerifiedMessage } from "../../Redux/Actions/ActionCreators";
import VideoAnalysis from "../card/videoAnalysis";
const RecordDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.user);
  const [data, setdata] = useState(null)
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false)

  useEffect(() => {

    async function singleVideo() {
      setloading(true)
      await getSingleVideo(token, id)
      .then((res) => {
        console.log(res)
        setdata(res.data)
        setloading(false)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response.data?.error?.message)
        if(err.response.data?.error?.message) {
          dispatch(notVerifiedMessage(err.response.data?.error?.message))
          dispatch(notVerified(true))
          toast.error('Verification required. Go to Settings')
        }
        
      })
    }

    singleVideo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Container>
      <div className="w-full px-2  sm:px-6 space-y-4 sm:space-y-7 pt-3 pb-6 sm:pt-4 sm:pb-8 h-fit">
        <div
        onClick={() => {
          navigate(-1)
        }}
        className="cursor-pointer flex space-x-2 items-center text-[12px] sm:text-sm text-gray-500">
          <IoIosArrowRoundBack className="text-[20px]" />
          <span>Back</span>
        </div>
        <div className="grid bg-gray-200 p-3 rounded-md grid-cols-6 gap-0 items-center w-[320px] space-x-3">
          <div className="rounded-full h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]">
            <img src={data?.image ||profile} alt="" className="w-full h-full rounded-full" />
          </div>
          <div className="text-ellipsis whitespace-nowrap col-span-5 overflow-hidden w-full">
            {`${data?.title || ''}`}
          </div>
        </div>

        <SingularCard loading={loading} views={data?.views } avgPercentView={`${data?.avg_percent_view}` } avgViewDuration={`${data?.avg_view_duration}`}/>
        <div className="w-full">
        <h3 className="text-lg font-medium sm:text-xl mb-3">Video Sales</h3>
          <VideoAnalysis url={data?.video} />
        </div>
       
        <div className="w-full mx-auto">
        <div className="dashboard-scroll-style w-full h-fit overflow-x-auto">
      <div className="w-full min-w-[1000px] space-y-3">
        <div className="w-full items-center bg-white px-3 py-3 sm:py-5 grid grid-cols-9 gap-2 text-gray-500">
          <div className="flex space-x-2 items-center col-span-3">
            <AiOutlinePlayCircle className="text-[#005ABC] text-[25px]" />
            <span>Name</span>
          </div>

          <div className="">Total Ordered</div>
          <div className="">Total Shipped</div>
          <div className="col-span-2">Price</div>
          <div>Total Income</div>
          <div>Revenue</div>
          
        </div>
        {loading && (
          <div className="w-full items-center justify-center flex h-[300px]">
            <div className="justify-center flex w-fit h-fit items-center">
              <LoaderIcon className="w-10 animate-spin text-[#005ABC]" />
            </div>
          </div>
        )}
        {!loading && data?.products?.length === 0 && (
          <div className="w-full h-[300px] flex justify-center items-center">
            <span className="w-[200px] h-[200px]">
              <img className="w-full h-full" src={empty} alt="" />
            </span>
          </div>
        )}
        {!loading &&
          data?.products?.length > 0 &&
          data?.products?.map(
            (
              {
                name,
                revenue,
                totalIncome,
                totalShipped,
                total_ordered,
                price

              },
              idx
            ) => {
              return (
                <div
               
                className="cursor-pointer"
                key={idx}>
                  <RecordWidgetC
                    image={data?.image}
                    name={name}
                    ordered={total_ordered}
                    price={price}
                    revenue={revenue || '0'}
                    income={totalIncome}
                    shipped={totalShipped}
                   
                  />
                </div>
              );
            }
          )}
      </div>
     
    </div>
        </div>
      </div>
    </Container>
  );
};

export default RecordDetail;
