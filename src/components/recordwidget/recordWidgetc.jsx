import React from "react";
import profile from "../../assets/png/products.jpg";
import { useNavigate } from "react-router-dom";
const RecordWidgetC = ({
  image,
  name,
  ordered,
  shipped,
  price,
  revenue,
  income,

}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white space-y-2 sm:space-y-3 w-full">
      <div
        onClick={() => {
          navigate("/product/1");
        }}
        className="w-full items-center  px-3 py-3 grid grid-cols-9 gap-2 border border-gray-300 rounded-sm"
      >
        <div className="grid grid-cols-6 items-center col-span-3">
          <div className="rounded-full h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]">
            <img
              src={image || profile}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="col-span-5 whitespace-nowrap text-ellipsis w-[190px] overflow-hidden ">
            {name}
          </div>
         
        </div>
        <div className="">{ordered || '0'}</div>
          <div className="">{shipped || '0'}</div>
        <div className="col-span-2">{price ||'$0'}</div>
       
        <div>{`${income?.toLocaleString() || '$0'}`}</div>
        <div>{`${revenue}` || '0'}</div>
        
      </div>
    </div>
  );
};

export default RecordWidgetC;
