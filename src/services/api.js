import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5249/api", // your .NET backend URL
});

export default api;
