import axios from "axios";
import API_URLS from "../utils/api-urls.constant";

const baseURL = API_URLS.ROOT;

const axiosInstance = axios.create({
  baseURL,
});

const get = (url) => {
  return axiosInstance.get(url);
};

const apiService = {
  get,
};

export default apiService;
