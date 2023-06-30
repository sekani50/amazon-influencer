import React, {useState} from "react";
import Loader from "../UI/Loader";
import Switch from "../UI/switch";

const Account = () => {
    const [curpassword, setcurPassword] = useState()
    const [newpassword, setnewpassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()
    const [loading, setLoading] = useState(false)

    
  const handleSubmit = () => {}
    return (
        <div className="w-full pb-10">
        <div className="w-[90%] mx-auto sm:w-[400px] mb-4 space-y-4 flex flex-col justify-center items-center">
            <div className="sm:text-xl text-lg font-semibold"> Change Password</div>

            <div className="form-group space-y-4 w-full">
      <label className="block font-semibold " htmlFor="password">
        Curent Password
      </label>
      <input
        className="block form__input border-gray-200 border focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
        type="password"
        placeholder="********"
        name="password"
        value={curpassword}
        onChange={(e) => {
          setcurPassword(e.target.value);
        }}
      />
    </div>

    <div className="form-group space-y-4 w-full">
      <label className="block font-semibold " htmlFor="password">
        New Password
      </label>
      <input
        className="block form__input border-gray-200 border focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
        type="password"
        placeholder="********"
        name="password"
        value={newpassword}
        onChange={(e) => {
          setnewpassword(e.target.value);
        }}
      />
    </div>

    <div className="form-group space-y-4 w-full">
      <label className="block font-semibold " htmlFor="password">
        Confirm New Password
      </label>
      <input
        className="block form__input border-gray-200 border focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
        type="password"
        placeholder="********"
        name="password"
        value={confirmPassword}
        onChange={(e) => {
          setconfirmPassword(e.target.value);
        }}
      />
    </div>
    <button
      onClick={handleSubmit}
      className="w-full py-3 bg-[#005ABC] font-semibold rounded-lg text-white flex justify-center items-center space-x-2"
    >
      {loading ? <Loader /> : "Change Password"}
    </button>

        </div>

    <div className="w-full mt-[4rem] sm:mt-[7rem]">
        <div className="py-3 px-2 border-t-2 border-gray-500 border-b-2">
            <div className="flex w-full justify-between items-center">
                <div className="space-y-2">
                    <div className="font-semibold">Notification</div>
                    <div className="text-[12px] sm:text-sm text-gray-500">Enable Notification</div>
                </div>
                <Switch/>
            </div>
        </div>
        <div className="py-3 px-2 border-gray-500 border-b-2">
            <div className="flex w-full justify-between items-center">
                <div className="space-y-2">
                    <div className="font-semibold">Email Notification</div>
                    <div className="text-[12px] sm:text-sm text-gray-500">Enable email notification</div>
                </div>
                <Switch/>
            </div>
        </div>
    </div>

    </div>
    )
}

export default Account