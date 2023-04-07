import axios from "axios";

export const codewarsUserDataFetch = axios.create({
  baseURL: "https://www.codewars.com/api/v1/users/",
  headers: {
    Accept: "application/json",
  },
});
