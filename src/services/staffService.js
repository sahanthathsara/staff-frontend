import axios from "axios";

const API_URL = "http://localhost:5249/api/staff";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAllStaff = async () => {
  const res = await axios.get(`${API_URL}/users`, authHeader());
  return res.data;
};

export const addStaff = async (staff) => {
  const res = await axios.post(API_URL, staff, authHeader());
  return res.data;
};
