import React, { useState } from "react";
import Container from "../container/container";
import { IoIosArrowRoundBack } from "react-icons/io";
import Loader from "../UI/Loader";
const SubPayment = () => {
    const [name, setName] = useState()
    const [cardnumber, setCardNumber] = useState()
    const [expirydate, setExpirydate] = useState()
    const [cvv, setCvv] = useState()
    const [loading] = useState(false)
  return (
    <Container>
      <div className="w-full px-2  sm:px-6 space-y-4 sm:space-y-7 bg-white py-3 sm:py-4 h-full">
        <div className="flex space-x-2 items-center text-[12px] sm:text-sm text-gray-500">
          <IoIosArrowRoundBack className="text-[20px]" />
          <span>Back</span>
        </div>

        <div className="w-full ">
          <div className="w-[95%] mx-auto sm:w-[400px]">
            <div className="rounded-lg bg-[#005CF1] px-4 font-semibold text-white w-full h-[150px] flex items-center justify-center">
              <div className="w-full flex flex-col space-y-4">
                <div className="w-full flex justify-between items-center">
                  <span className="text-gray-200 ">You have to pay</span>
                  <span className=" ">$50</span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <span className="text-gray-200 ">Service Package</span>
                  <span className=" ">Professional</span>
                </div>
              </div>
            </div>

            <div className="mt-4 px-3 sm:px-4">
              <div className="form-group space-y-4 w-full">
                <label className="block font-semibold " htmlFor="name">
                  Card holder name (optional)
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
                  type="name"
                  placeholder="Jiaha"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group space-y-4 w-full">
          <label className="block font-semibold " htmlFor="number">
            Card number
          </label>
          <input
            className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
            type="number"
            placeholder="***********"
            name="number"
            value={cardnumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex mt-4 space-x-3 items-center">
        <div className="form-group space-y-4 w-[60%]">
          <label className="block font-semibold " htmlFor="date">
            Expiry Date
          </label>
          <input
            className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
            type="date"
            placeholder="******"
            name="date"
            value={expirydate}
            onChange={(e) => {
              setExpirydate(e.target.value);
            }}
          />
        </div>

        <div className="form-group w-[40%] space-y-4 ">
          <label className="block font-semibold " htmlFor="number">
            CVV
          </label>
          <input
            className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
            type="number"
            maxLength={3}
            placeholder="***"
            name="number"
            value={cvv}
            onChange={(e) => {
              setCvv(e.target.value);
            }}
          />
        </div>
        </div>

        <div className="w-full flex items-center mt-3 justify-center">
          <button
         
          className="w-[70%] py-2  bg-[#005ABC] font-medium rounded-lg text-white flex justify-center items-center">
            {loading ? <Loader /> : "Pay"}
          </button>
        </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SubPayment;
