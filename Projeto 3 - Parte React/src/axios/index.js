import axios from "axios";

const AxiosApi = axios.create({
  baseURL: "http://localhost:3080"
});

export default AxiosApi;
