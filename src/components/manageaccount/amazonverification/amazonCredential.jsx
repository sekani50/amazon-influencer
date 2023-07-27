import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { credentials } from "../../../Utils/api";
import { getVerificationData } from "../../../Redux/Actions/ActionCreators";
const AmazonCredential = ({ setSuccess}) => {
  const dispatch = useDispatch()
  const { currentUser, token } = useSelector((state) => state.user);
  const [email, setEmail] = useState(currentUser?.email);

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    const payload = {
      email,
      password,
    };

    for (let i in payload) {
      if (payload[i] === "") {
        toast.error(`${i} is required`);
        return;
      }
    }
    setLoading(true)
    await credentials(token, payload)
      .then((res) => {
       // console.log(res.data);
        const {captcha} = res.data;
        setSuccess(true)
        toast.success('Credentials Verified')
        dispatch(getVerificationData({
          captcha,
          password
        }))
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data?.response.messsage)
        setLoading(false)
      });
  };
  return (
    <div className={`w-full h-fit let swipeIn `}>
       
      <div className=" mx-auto w-[95%] sm:w-[400px] flex flex-col items-center justify-center space-y-4">
       
        <div className="text-lg font-semibold sm:text-2xl">Enter Your Amazon Credentials</div>

        <div className="form-group space-y-4 w-full">
          <label className="block font-semibold " htmlFor="email">
            Email Address
          </label>
          <input
            className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
            type="email"
            placeholder="name@company.com"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group space-y-4 w-full">
          <label className="block font-semibold " htmlFor="password">
            Password
          </label>
          <input
            className="block form__input border-gray-200 border focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
            type="password"
            placeholder="********"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full h-[45px] bg-[#005ABC] font-semibold rounded-lg text-white flex justify-center items-center space-x-2"
        >
          {loading ? (
            <LoaderIcon className="text-base animate-spin" />
          ) : (
            "Save Credentials"
          )}
        </button>
      </div>
    </div>
  );
};

export default AmazonCredential;
