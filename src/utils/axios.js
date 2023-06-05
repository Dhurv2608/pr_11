import axios from "axios";

export const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_baseURL,
});

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return await axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function postFormData(url, data, config = {}) {
  return await axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}

export async function putFormData(url, data, config = {}) {
  return await axiosApi
    .put(url, data, { ...config })
    .then((response) => response.data);
}

export async function putApi(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
