import { Axios } from "axios";

export const getApiClient = () => {
  return new Axios({
    headers: {
      Authorization: `Bearer ${process.env.APP_TMDB_API_ACCESS_TOKEN}`,
    },
  });
};
