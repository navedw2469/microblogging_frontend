import Cookies from "js-cookie";
import axios from "axios";

const secureAPI = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
});

secureAPI.interceptors.request.use(function (config) {
  let authKey = Cookies.get('session_token');
  config.headers["Authorization"] = "Bearer " + authKey;
  return config;
});

secureAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        Cookies.remove('session_token');
        window.location.pathname = '/login';
      } else {
        // Handle other status codes here
        // For example, you can log the error or show a notification
        console.error('HTTP Error:', error.response.status);
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default secureAPI;
