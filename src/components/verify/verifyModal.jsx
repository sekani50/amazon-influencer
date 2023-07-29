import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notVerified } from "../../Redux/Actions/ActionCreators";

const VerifyModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {isnotVerified, message}  = useSelector((state) => state.user)
  return (
    <div
    onClick={(e) => {
        e.stopPropagation()
        dispatch(notVerified(false))
    }}
    className={`w-full h-full inset-0 bg-black bg-opacity-20 fixed ${isnotVerified ? 'block' : 'hidden'}`}>
      <div
      onClick={(e) => {
        e.stopPropagation()
       
      }}
      className="w-[95%] sm:w-[350px] items-center justify-center flex flex-col inset-0 m-auto absolute h-fit bg-white rounded-lg py-6 px-4 space-y-5">
        <div className="text-red-500 font-medium text-center ">{message}</div>
        <button
          onClick={() => {
            navigate("/setting", {
              state: {
                active: 2
              }
            });
            dispatch(notVerified(false))
          }}
          className="h-[45px] w-fit px-6 font-medium bg-[#005ABC] rounded-lg text-white"
        >
          Setting
        </button>
      </div>
    </div>
  );
};

export default VerifyModal;
