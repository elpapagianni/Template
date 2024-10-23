import { Method } from "axios";
import useCreateAxiosInstance from "./useCreateAxiosInstance";
import { useState } from "react";

interface RequestParams {
  url: string;
  method: Method;
  data?: any;
}

const useApiRequest = () => {
  const axiosInstance = useCreateAxiosInstance();
  const [requestId, setRequestId] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const request = async ({ url, method, data }: RequestParams) => {
    setRequestId(url);
    setIsLoading(true);
    try {
      const apiResponse = await axiosInstance.request({
        url,
        method,
        data,
      });
      setIsLoading(false);
      return {
        data: apiResponse.data,
        status: apiResponse.status,
        error: null,
      };
    } catch (error) {
      setIsLoading(false);
      console.error("API request error:", error);
      return { data: null, status: null, error };
    }
  };
  return { request, isLoading, requestId };
};
export default useApiRequest;
