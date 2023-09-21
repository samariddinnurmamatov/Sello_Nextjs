import axios, { AxiosInstance } from 'axios';
// import { TOKEN } from '@/constants/const';
// import { getCookie } from 'cookies-next';

export const request: AxiosInstance = axios.create({
  baseURL: "https://stg-api.sello.uz/",
  timeout: 10000,
  // headers: {
  //   Authorization: getCookie(TOKEN) ? "Bearer " + getCookie(TOKEN) : null,
  // },
});