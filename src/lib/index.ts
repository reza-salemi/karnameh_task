import axios from "axios";

const reqInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3000",
});

export default reqInstance;
