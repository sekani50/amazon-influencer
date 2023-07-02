import React from "react";

const ProductButton = ({ active }) => {
  return (
    <div>
      {active ? (
        <button className="rounded-[100px] whitespace-nowrap uppercase p-2 bg-[#30DA88] font-semibold text-[11px] sm:text-[13px] w-[110px] overflow-hidden text-white">
          In stock
        </button>
      ) : (
        <button className="rounded-[100px] uppercase p-2 bg-[#514EF3] font-semibold text-[11px] sm:text-[13px] bg-opacity-20 w-[110px] text-[#514EF3]">
          Out of stock
        </button>
      )}
    </div>
  );
};

export default ProductButton;
