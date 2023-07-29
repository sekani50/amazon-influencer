import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { credentials, getCredentials } from "../../../Utils/api";
import {
  getVerificationCredential,
  getVerificationData,
} from "../../../Redux/Actions/ActionCreators";
import Switch from "../../UI/switch";
import { useEffect } from "react";
const AmazonCredential = ({ setSuccess }) => {
  const dispatch = useDispatch();
  const { token, credential } = useSelector((state) => state.user);
  const [email, setEmail] = useState(credential?.key);
  const [password, setPassword] = useState(credential?.value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStatus() {
      await getCredentials(token)
        .then((res) => {
          console.log(res);
          dispatch(getVerificationCredential(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    setLoading(true);
    await credentials(token, payload)
      .then((res) => {
        // console.log(res.data);
        const { captcha } = res.data;
        setSuccess(true);
        toast.success("Credentials Saved Successfully");
        dispatch(
          getVerificationData({
            captcha,
            password,
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (
          err.message === "Network Error" ||
          err.message === "timeout exceeded"
        ) {
          toast.error("Network Error");
        }
        else {
         // const { message:mm } = err.response.data.error;
        // toast.error(mm);
          toast.error(err.response.statusText)
        }
       // console.log(err.response.data.response.message)
      
       
        const { message } = err.response.data.response;
        toast.error(message);
        const { message:mm } = err.response.data.error;
         toast.error(mm);
      });
  };
  return (
    <div className={`w-full h-fit let swipeIn `}>
      <div className=" mx-auto w-[95%] sm:w-[400px] flex flex-col items-center justify-center space-y-4">
        <div className="text-lg font-semibold sm:text-2xl">
          Enter Your Amazon Credentials
        </div>

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
            readOnly={credential?.status}
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
            readOnly={credential?.status}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          disabled={credential?.status}
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

      <div className="w-full mt-[4rem] sm:mt-[7rem]">
        <div className="py-3 px-2 border-t-2 border-gray-500 border-b-2">
          <div className="flex w-full justify-between items-center">
            <div className="space-y-2">
              <div className="font-semibold">Status</div>
              <div
                className={`text-[12px] sm:text-sm ${
                  credential?.status ? "text-green-500" : "text-red-500"
                } `}
              >
                {credential?.status ? "Verified" : "Not verified"}
              </div>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonCredential;
