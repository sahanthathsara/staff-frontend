import axios from "axios";

const API_URL = "https://localhost:5249/api/staff"; // adjust if needed

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAllStaff = async () => {
  const res = await axios.get(API_URL, getAuthHeader());
  return res.data;
};

export const addStaff = async (staff) => {
  const res = await axios.post(API_URL, staff, getAuthHeader());
  return res.data;
};

export const updateStaff = async (id, staff) => {
  const res = await axios.put(`${API_URL}/${id}`, staff, getAuthHeader());
  return res.data;
};

export const deleteStaff = async (id) => {
  await axios.delete(`${API_URL}/${id}`, getAuthHeader());
};
