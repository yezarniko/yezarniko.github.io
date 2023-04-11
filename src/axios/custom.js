import axios from "axios";

/**
 * Axios instance for fetching CodeWars user data.
 * @constant {AxiosInstance}
 */
export const codewarsUserDataFetch = axios.create({
  baseURL: "https://www.codewars.com/api/v1/users/",
  headers: {
    Accept: "application/json",
  },
});
