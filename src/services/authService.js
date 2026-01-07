import axios from "axios";

const API_URL = "http://localhost:5249/api/auth"; // Backend URL

// Signup request
export const signup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw error.response?.data || "Signup failed";
  }
};

// Login request
export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    console.log("Login response:", response.data); // debug

    // Return the correct fields from backend
    return {
      token: response.data.token,
      name: response.data.name,
      role: response.data.role, // string: "Cook", "Manager", etc.
    };
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error.response?.data || "Login failed";
  }
};
