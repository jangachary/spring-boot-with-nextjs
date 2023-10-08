// axios.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080", // Replace with your API base URL
  timeout: 5000, // Adjust as needed
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need
  },
});

export default instance;
