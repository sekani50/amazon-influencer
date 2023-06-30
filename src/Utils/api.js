import axios from "./useAxios";

//get order statistics
export const getOrderStat = (token) => {
  return axios.get("/admin/orders/stats", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// get vendor statistics
export const getVendorStats = (token) => {
  return axios.get("/admin/vendors/stats", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//best seller
export const bestseller = (token) => {
  return axios.get("/admin/vendors/best-sellers", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//recent sales daily weekly monthly
export const recentSales = (payload, token) => {
  return axios.get(`/admin/orders/recent-sales?period=${payload}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//get all vendors
export const allvendors = (token) => {
  return axios.get(`/admin/vendors`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//get single vendor
export const singleVendor = (id, token) => {
  return axios.get(`/admin/vendors/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//update vendor
export const updateVendor = (id, payload, token) => {
  console.log(payload);
  return axios.put(`/admin/vendors/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//toggle featured
export const toggleFeatured = (id, payload, token) => {
  console.log(payload);
  return axios.patch(`/admin/vendors/${id}/featured`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//get customer stat
export const customerStat = (token) => {
  return axios.get("/admin/customers/stats", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//get all customers
export const allCustomers = (page, token) => {
  return axios.get(`/admin/customers?page=${page}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//update customer
export const updateCustomer = (id, payload, token) => {
  return axios.put(`/admin/customers/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//get all riders /admin/riders/stats
export const allRiders = (token) => {
  return axios.get(`/admin/riders`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//get rider stat
export const riderStat = (token) => {
  return axios.get(`/admin/riders/stats`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//get single rider
export const singleRider = (id, token) => {
  return axios.get(`/admin/riders/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//update rider
export const updateRider = (id, payload, token) => {
  return axios.put(`/admin/riders/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// get vendor meals
export const getVendorMeals = (id, category, type, token) => {
  return axios.get(
    `/admin/vendors/${id}/meals?category=${category}&type=${type}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

//update a meal
export const updateMeal = (id, payload, token) => {
  return axios.put(`/admin/meals/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// add a meal
export const newMeal = (id, payload, token) => {
  return axios.post(`/admin/vendors/${id}/meals`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//delete a meal
export const deleteMeal = (id, token) => {
  return axios.delete(`/admin/meals/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// add user
export const addUser = (payload, token) => {
  return axios.post(`/admin/users`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//delete user
export const deleteUser = (id, token) => {
  return axios.delete(`/admin/users/${id}/`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// all orders
export const allOrders = (payload, page, token) => {
  //const {period, startDate, endDate} = payload
  return axios.get(
    `/admin/orders?period=${payload?.period}&startDate=${payload?.startDate}&endDate=${payload?.endDate}&page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

// vendor || rider completed orders

export const successfulOrders = (id, payload, page, token) => {
  return axios.get(
    `/admin/users/${id}/orders?period=${payload?.period}&startDate=${payload?.startDate}&endDate=${payload?.endDate}&page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

//update user image
export const updateImage = (id, form, token) => {
  return axios.patch(`/admin/users/${id}/profile-image`, form, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};


//revenue graph 
export const revenueGraph = (token) => {
  return axios.get(`/admin/dashboard/revenue-graph/yearly`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

//all payments
export const allPayments = (token) => {
  return axios.get(`/admin/payments`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}