// import { getAuth } from "$lib";
// import axios from "axios";

// export const AxiosInstance = axios.create({
//   baseURL: import.meta.env.BACKEND_URL,
//   transformRequest: [
//     ...(Array.isArray(axios.defaults.transformRequest) ? axios.defaults.transformRequest : []),
//     (data, headers) => {
//       if (typeof document === "undefined") {
//         headers.common["Authorization"] = `Bearer ${getAuth()}`;
//       }

//       return data;
//     },
//   ],
// });

// export const _get = async (route: string) => {
//   const { data } = await AxiosInstance.get(route);
//   return data;
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const _post = async (route = "", arg: any) => {
//   const { data } = await AxiosInstance.post(route, arg);
//   return data;
// };

// export const _put = async (route = "", arg = {}) => {
//   const { data } = await AxiosInstance.put(route, arg);
//   return data;
// };

// export const _delete = async (route = "", arg = {}) => {
//   const { data } = await AxiosInstance.put(route, arg);
//   return data;
// };

// export const _patch = async (route = "", arg = {}) => {
//   const { data } = await AxiosInstance.put(route, arg);
//   return data;
// };
