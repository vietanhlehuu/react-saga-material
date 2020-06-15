import axios from "axios";
import { configConstants } from "constants/constants";
import Storage from "helpers/storage";

const setInterceptorResponse = (instance) => {
  instance.interceptors.response.use(
    (res) => {
      if (res.data && res.data.code !== 1) {
        throw res.data;
      }
      if (res.data && !res.data.success) {
        throw new Error();
      }
      if (res.data && res.data.payload) {
        return res.data.payload;
      }
      if (res.data) return res.data;
      return null;
    },
    (err) => {
      // console.log(err.response);
      throw err;
    }
  );
};

export const api = {
  call: () => {
    const instance = axios.create({
      baseURL: configConstants.SERVER_URL,
    });
    setInterceptorResponse(instance);
    return instance;
  },
  callWithAuth: (header = {}) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Storage.getToken()}`,
      ...header,
    };
    const instance = axios.create({
      baseURL: configConstants.SERVER_URL,
      headers,
    });

    setInterceptorResponse(instance);

    return instance;
  },
};
