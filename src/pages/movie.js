import { Lightning } from "@lightningjs/sdk";
import { VIEWPORT_HEIGHT, VIEWPORT_WIDTH } from "../lib/constants";

export default class Movie extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: VIEWPORT_WIDTH,
        h: VIEWPORT_HEIGHT,
        color: 0xff675433,
        rect: true,
      },
    };
  }

  _init() {}

  _getFocused() {}

  static _states() {
    return [];
  }
}
