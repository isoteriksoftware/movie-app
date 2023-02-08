import { Lightning } from "@lightningjs/sdk";
import { VIEWPORT_HEIGHT, VIEWPORT_WIDTH } from "../lib/constants";

export default class Home extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: VIEWPORT_WIDTH,
        h: VIEWPORT_HEIGHT,
        color: 0xffe5e5e5,
      },
    };
  }

  _init() {}

  _getFocused() {}

  static _states() {
    return [];
  }
}
