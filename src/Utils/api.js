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

//get product
export const getProducts = (token, page) => {
  return axios.post('/products', page, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

//get metrics  
export const getMetrics = (token) => {
  return axios.get('/products/metric', {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}
