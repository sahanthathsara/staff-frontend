import axios from "axios";

const API_URL = "http://localhost:5249/api/staff";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// ✅ Get all staff (Manager only)
export const getAllStaff = async () => {
  const res = await axios.get(`${API_URL}/users`, getAuthHeader());
  return res.data;
};

// ✅ Add staff (optional – if backend supports it)
export const addStaff = async (staff) => {
  const res = await axios.post(API_URL, staff, getAuthHeader());
  return res.data;
};

// ✅ Update staff (optional)
export const updateStaff = async (id, staff) => {
  const res = await axios.put(`${API_URL}/${id}`, staff, getAuthHeader());
  return res.data;
};

// ✅ DELETE STAFF — THIS WAS THE MISSING ONE
export const deleteStaff = async (id) => {
  await axios.delete(`${API_URL}/${id}`, getAuthHeader());
};
