import axios, { AxiosInstance } from "axios";
import Endpoints from "../../shared/endPoints.json";
import { message } from "antd";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const useCreateAxiosInstance = (): AxiosInstance => {
  const { token, logout } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL: Endpoints.BASEURL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        logout();
        message.error("Παρακαλώ συνδεθείτε ξανά");
        return;
      }
      message.error("Παρουσιάστηκε σφάλμα");
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
export default useCreateAxiosInstance;
