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

//post videos
export const getVideos = (token, page) => {
  return axios.post('/videos', page, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

///video-sales
export const getVideoSales = (token) => {
  return axios.post('/video-sales', {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}
// 
export const getVideoMetric = (token) => {
  return axios.get('/videos/metric', {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

// /associate/video/report?id=14
export const getSingleVideo = (token, id) => {
  return axios.get(`/associate/video/report?id=${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

// 
export const updateProfile = (token, payload) => {
  return axios.put(`/profile`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

// /password/change
export const changePassword = (token, payload) => {
  return axios.put(`/password/change`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

// /password/forgot
export const sendMail = (token, payload) => {
  return axios.post(`/password/forgot`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}
