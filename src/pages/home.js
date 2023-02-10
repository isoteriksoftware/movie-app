import { Lightning } from "@lightningjs/sdk";
import { VIEWPORT_HEIGHT, VIEWPORT_WIDTH } from "../lib/constants";
import { getApiClient } from "../lib/api";
import MovieCard from "../components/MovieCard";
import { List } from "@lightningjs/ui";

export default class Home extends Lightning.Component {
  static _template() {
    return {
      w: VIEWPORT_WIDTH,
      h: VIEWPORT_HEIGHT,

      Background: {
        rect: true,
        w: VIEWPORT_WIDTH,
        h: VIEWPORT_HEIGHT,
        color: 0xffe5e5e5,
      },
      Movies: {
        w: (pw) => pw,
        rect: true,
        color: 0x00ffffff,
        flex: {
          direction: "row",
          wrap: true,
          justifyContent: "space-evenly",
        },
      },
    };
  }

  async _init() {
    const response = await getApiClient().get("/movie/upcoming");
    if (response.status === 200) {
      this.movies = JSON.parse(response.data).results;
      this.displayMovies();
    }
  }

  displayMovies() {
    const movies = this.movies.map((movie) => {
      return {
        type: MovieCard,
        data: movie,
        flexItem: {
          marginTop: 20,
        },
      };
    });

    this.tag("Movies").children = movies;
  }

  _getFocused() {}

  static _states() {
    return [];
  }
}
