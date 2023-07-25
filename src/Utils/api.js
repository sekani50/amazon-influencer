import axios from "./useAxios";

//get order statistics
export const getOrderStat = (token) => {
  return axios.get("/admin/orders/stats", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//credentials for verfication
export const credentials = (token, payload) => {
  return axios.post("/associate/setup", payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

///associate/captcha
export const captchaAnswer = (token, payload) => {
  return axios.post("/associate/captcha", payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

