import { Lightning, Router } from "@lightningjs/sdk";

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

    this.focusedAnimation = this.tag("Poster").animation({
      duration: 0.4,
      repeat: 0,
      stopMethod: "immediate",
      actions: [{ p: "scale", v: { 0: 1, 1: 1.05 } }],
    });
    this.unfocusedAnimation = this.tag("Poster").animation({
      duration: 0.4,
      repeat: 0,
      stopMethod: "immediate",
      actions: [{ p: "scale", v: { 0: 1.05, 1: 1 } }],
    });
  }

  _focus() {
    this.tag("Poster").patch({
      shader: {
        type: Lightning.shaders.FadeOut,
        fade: 30,
      },
    });

    this.focusedAnimation.start();
  }

  _unfocus() {
    const radius = 10;
    this.tag("Poster").patch({
      shader: {
        type: Lightning.shaders.RoundedRectangle,
        radius: [radius, radius, 0, 0],
      },
    });

    this.unfocusedAnimation.start();
  }

  _handleEnter() {
    Router.navigate(`movie/${this.data.id}`);
  }

  static _states() {
    return [];
  }
}
