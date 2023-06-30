import React, {useState} from "react";

const Switch = () => {
  const [isToggled, setToggle] = useState(false)
    return (
        <div className=" px-1 flex justify-between md:text-sm text-xs items-center">
          <div className="flex space-x-4 items-center">
            <div
              onClick={() => {
               setToggle(!isToggled)
              }}
              className={`${
                isToggled ? "bg-[#005CF1]" : "bg-gray-400"
              } md:h-6 h-4 md:w-14 w-12  rounded-2xl p-2`}
            >
              <div
                onClick={() => {
                    setToggle(!isToggled)
                }}
                className={`${
                  isToggled ? "translate-x-6" : "translate-x-[-8px]"
                } transform duration-300  md:h-6 h-4 md:w-6 w-4 mt-[-8px] bg-white rounded-full`}
              ></div>
            </div>
          </div>
        </div>
    )
}

export default Switch