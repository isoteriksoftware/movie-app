import { Axios } from "axios";

export const getApiClient = () => {
  return new Axios({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      Authorization: `Bearer ${process.env.APP_TMDB_API_ACCESS_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};
