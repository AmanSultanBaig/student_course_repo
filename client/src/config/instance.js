import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:5050/api`,
});

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export const CREATE = (url, body) => instance.post(url, body)
export const UPDATE = (url, body) => instance.put(url, body)
export const REMOVE = (url) => instance.delete(url)
export const GET = (url) => instance.get(url);