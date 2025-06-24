import axios from "axios";

const RestInstance = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "x-api-key": "reqres-free-v1",
  },
  timeout: 1000,
});

export default RestInstance;
