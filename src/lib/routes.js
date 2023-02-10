import Home from "../pages/home";
import Movie from "../pages/movie";

export default {
  root: "$",
  routes: [
    {
      path: "$",
      component: Home,
    },
    {
      path: "movie/:id",
      component: Movie,
    },
  ],
};
