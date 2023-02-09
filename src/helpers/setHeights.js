import {
  vars,
  defaultHeight
} from '../variables.js';

export function setHeights () {
  document.querySelector('.visual__backblaze').style.cssText = `height: ${
    vars.backblazeCoast + defaultHeight
  }%;`;
  document.querySelector('.visual__bunny').style.cssText = `height: ${
    vars.bunnyCoast + defaultHeight
  }%;`;
  document.querySelector('.visual__scaleway').style.cssText = `height: ${
    vars.scaleawayCoast + defaultHeight
  }%;`;
  document.querySelector('.visual__vultr').style.cssText = `height: ${
    vars.vultCoast + defaultHeight
  }%;`;
};
