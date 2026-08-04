import axios from "axios";

const api = axios.create({
  baseURL: "https://lift-lab-06fc.onrender.com",
  withCredentials: true,
});

export default api;