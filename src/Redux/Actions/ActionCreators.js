// Action Creators
import * as type from "./Types";
import axios from "../../Utils/useAxios";
import toast from "react-hot-toast";

const GetUsersSuccess = (data) => {
  return {
    type: type.FETCH_USER_SUCCESS,
    payload: data,
  };
};

const loginSuccess = (data) => {
  return {
    type: type.LOGIN_SUCCESS,
    payload: data,
  };
};
const logout = () => {
  return {
    type: type.LOGOUT,
  };
};




const LoginAction = (loginParams, navigate, setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    await axios
      .post("/admin/auth/login", loginParams)
      .then((res) => {
        console.log(res.data.data);
        const { admin } = res.data.data;
        dispatch(GetUsersSuccess(admin));

        const { token } = res.data.data.accessToken;
        dispatch(loginSuccess(token));
        console.log(token);
        console.log(admin);
        navigate("/home");
        setLoading(false);
        toast.success("Login successful");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        console.log(error.response.data.error.message);
        toast.error(error.response.data.error.message);
      });
  };
};

const registration = (registrationParams, navigate, setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    await axios
      .post("/auth/signup", registrationParams)
      .then((res) => {
        console.log(res.data.data);
        const { data } = res.data;
        dispatch(GetUsersSuccess(data.newVendor));
        toast.success("Registration Successful");
        navigate("/meal");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        //console.log(error.response.data.error.message);
        toast.error(error.response.data.error.message);
      });
  };
};

export {
  LoginAction,
  registration,
  loginSuccess,
  logout,

  
};
