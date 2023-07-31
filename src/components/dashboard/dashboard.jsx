import React, { useEffect, useState } from "react";
import Container from "../container/container";
import AnalysisCard from "../card/analysisCard";
import ProductRecords from "../records/productRecords";
import VideoRecords from "../records/videoRecords";
import AnalysisCardB from "../card/analysisCardb";
import { getCredentials } from "../../Utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  getVerificationCredential,
  notVerified,
  notVerifiedMessage,
} from "../../Redux/Actions/ActionCreators";
import { toast } from "react-hot-toast";
const Dashboard = () => {
  const [active, setactive] = useState(0);
  const [tab, setTab] = useState("Videos");
  const { token, credential } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function showCredential() {
      await getCredentials(token)
        .then((res) => {
          // console.log(res)
          dispatch(getVerificationCredential(res.data));
          if (res.data === false || res.data.status === false) {
            dispatch(
              notVerifiedMessage("Verification required. Go to Settings")
            );
            dispatch(notVerified(true));
            toast.error("Verification required. Go to Settings");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    showCredential();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

/**
   useEffect(() => {
    if ((credential && credential === false) || (credential && !credential.status)) {
      dispatch(notVerifiedMessage("Verification required. Go to Settings"));
      dispatch(notVerified(true));
      toast.error("Verification required. Go to Settings");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [credential]);
 */

  return (
    <Container>
      <div className="w-full px-2  sm:px-6 py-4 h-fit">
        {tab === "Products" && <AnalysisCard />}
        {tab === "Videos" && <AnalysisCardB />}
        <div className="border-b-2 px-2 border-gray-300 w-full flex items-center ">
          <div className="flex items-center space-x-8">
            <span
              onClick={() => {
                setactive(0);
                setTab("Videos");
              }}
              className={`py-2 cursor-pointer ${
                active === 0
                  ? "border-b-[4px] border-[#005ABC] font-bold"
                  : "font-semibold text-gray-500"
              }`}
            >
              Videos
            </span>
            <span
              onClick={() => {
                setactive(1);
                setTab("Products");
              }}
              className={`py-2 cursor-pointer ${
                active === 1
                  ? "border-b-[4px] border-[#005ABC] font-bold"
                  : "font-semibold text-gray-500"
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
