import { Lightning } from "@lightningjs/sdk";

export default class MovieCard extends Lightning.Component {
  static _template() {
    const width = 350;
    const radius = 10;
    this.data = this.bindProp("data");

    return {
      w: width,
      rect: true,
      color: 0xffffffff,
      flex: {
        direction: "column",
      },
      shader: {
        type: Lightning.shaders.RoundedRectangle,
        radius: radius,
      },

      Poster: {
        w: width,
        h: width,
        shader: {
          type: Lightning.shaders.RoundedRectangle,
          radius: [radius, radius, 0, 0],
        },
      },
      Container: {
        w: width,
        flex: {
          direction: "column",
          padding: 10,
        },

        Title: {
          text: {
            fontSize: 16,
            wordWrap: true,
            textColor: 0xff000000,
            textAlign: "left",
            wordWrapWidth: width - 10,
          },
        },
      },
    };
  }

  _init() {
    this.patch({
      Poster: {
        src: `https://image.tmdb.org/t/p/w500/${this.data.poster_path}`,
      },
      Container: {
        Title: {
          text: {
            text: this.data.original_title,
          },
        },
      },
    });
  }

  _focus() {
    this.patch({});
  }

  _getFocused() {}

  static _states() {
    return [];
  }
}
