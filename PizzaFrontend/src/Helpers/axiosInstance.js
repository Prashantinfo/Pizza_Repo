import axios from "axios";

const axiosInstance = axios.create(); // Create a new instance of axios

axiosInstance.defaults.baseURL = "http://localhost:3000/"; // Set the base URL

axiosInstance.defaults.withCredentials = true; // Allow cookies to be sent with requests

export default axiosInstance;