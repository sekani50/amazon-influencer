import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { LoaderIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { captchaAnswer } from "../../../Utils/api";
import { useDispatch, useSelector } from "react-redux";
import { credentials } from "../../../Utils/api";
import { getVerificationData } from "../../../Redux/Actions/ActionCreators";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const AmazonCaptcha = ({ setSuccess }) => {
  const [isMailMessage, setMailMessage] = useState();
  const { token, currentUser, verificationData } = useSelector(
    (state) => state.user
  );
  const [countdown, setcountdown] = useState(20);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [isError, setError] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const navigate = useNavigate();
  const credential = {
    email: currentUser?.email,
    password: verificationData.password,
  };
  const handleSubmit = async () => {
    const payload = {
      answer,
      password: verificationData?.password,
    };

    if (answer === "") {
      toast.error("Please enter the text in the picture");
      return;
    }
    setLoading(true);
    await captchaAnswer(token, payload)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res.data.message) {
          setMailMessage(res.data.message);
        }
        toast.success("Verification successful");
        //navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (
          err.message === "Network Error" ||
          err.message === "timeout exceeded"
        ) {
          toast.error("Network Error");
        }

        console.log(err?.response.data?.response?.message);
        if (err.response.data?.response?.captcha) {
          dispatch(
            getVerificationData({
              captcha: err?.response?.data?.response?.captcha,
              password: verificationData?.password,
            })
          );
          toast.error("Try captcha again");
        } else {
          setError(true);

          toast.error(err.response.statusText);
        }
        if ("Invalid credentials, Try again...") {
          toast.error("Invalid credentials, Try again...");
          setSuccess(false);
        }

        const { message } = err.response.data.response;
        if (message) {
          toast.error(message);
        }
        const { message: mm } = err.response.data.error;
        if (mm) {
          toast.error(mm);
        }
      });
  };

  async function regenerate() {
    setRegenerating(true);
    await credentials(token, credential)
      .then((res) => {
        // console.log(res.data);
        const { captcha } = res.data;
        dispatch(
          getVerificationData({
            captcha,
            password: verificationData?.password,
          })
        );
        setError(false);
        setRegenerating(false);
      })
      .catch((err) => {
        console.log(err);
        setRegenerating(false);
        if (
          err.message === "Network Error" ||
          err.message === "timeout exceeded"
        ) {
          toast.error("Network Error");
        }

        const { message } = err.response.data.response;
        if (message) {
          toast.error(message);
        }
        const { message: mm } = err.response.data.error;
        if (mm) {
          toast.error(mm);
        }
        //toast.error(err.response.data.error)
      });
  }

  useEffect(() => {
    if (isMailMessage) {
      let timerInterval = setInterval(function () {
        setcountdown(countdown - 1);

        if (countdown <= 0) {
          clearInterval(timerInterval);
          navigate("/");
        }
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMailMessage]);
  return (
    <>
      <div className={`w-full h-fit let swipeIn `}>
        <div className=" mx-auto w-[95%] sm:w-[400px] flex flex-col items-center justify-center space-y-4">
          <div className="sm:w-[350px] sm:h-[350px] h-[350px] w-full">
            <img
              src={verificationData?.captcha}
              alt=""
              className="w-full h-full object-fill"
            />
          </div>
          {isError && (
            <div className="w-full items-center justify-center transition-all duration-150 flex">
              <button
                onClick={regenerate}
                className="bg-[#005ABC] font-medium text-white w-[150px] flex items-center justify-center rounded-lg px-2 h-[45px]"
              >
                {regenerating ? (
                  <LoaderIcon className="animate-spin" />
                ) : (
                  "Regenerate"
                )}
              </button>
            </div>
          )}
          {!isError && (
            <div className="w-full space-y-4">
              <div className="form-group space-y-4 w-full">
                <label className="block font-semibold " htmlFor="text">
                  Enter the text you can see in the image above
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
                  type="text"
                  placeholder=""
                  name="text"
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
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
                  "Continue"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      {isMailMessage && (
        <div
          onClick={() => {
            setMailMessage("");
          }}
          className="w-full h-full fixed bg-black bg-opacity-20 inset-0"
        >
          <div className="w-[95%] space-y-5 rounded-lg flex flex-col items-center justify-center bg-white py-6 px-4 sm:w-[350px] inset-0 m-auto absolute h-fit">
            <div className="text-red-500 font-medium">{`Check your email and accept login if available else disregard... within ${countdown} seconds...`}</div>

            <div
              onClick={() => {
                setMailMessage("");
              }}
              className="cursor-pointer w-fit h-fit"
            >
              <AiFillCloseCircle className="text-[#005ABC]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AmazonCaptcha;
