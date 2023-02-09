import { defaultHeight, vars } from '../variables.js';

export function setStyleForSmallestColumn() {
  const coastArray = [
    vars.backblazeCoast,
    vars.bunnyCoast,
    vars.scaleawayCoast,
    vars.vultCoast,
  ];
  const smallestCoast = Math.min(...coastArray);

  if (
    document.querySelector('.visual__backblaze').style.cssText ===
    `height: ${smallestCoast + defaultHeight}%;`
  ) {
    document.querySelector('.visual__backblaze').style.cssText = `height: ${
      smallestCoast + defaultHeight
    }%; background-color: green;`;
  }
  if (
    document.querySelector('.visual__bunny').style.cssText ===
    `height: ${smallestCoast + defaultHeight}%;`
  ) {
    document.querySelector('.visual__bunny').style.cssText = `height: ${
      smallestCoast + defaultHeight
    }%; background-color: green;`;
  }
  if (
    document.querySelector('.visual__scaleway').style.cssText ===
    `height: ${smallestCoast + defaultHeight}%;`
  ) {
    document.querySelector('.visual__scaleway').style.cssText = `height: ${
      smallestCoast + defaultHeight
    }%; background-color: green;`;
  }
  if (
    document.querySelector('.visual__vultr').style.cssText ===
    `height: ${smallestCoast + defaultHeight}%;`
  ) {
    document.querySelector('.visual__vultr').style.cssText = `height: ${
      smallestCoast + defaultHeight
    }%; background-color: green;`;
  }

  console.log('smallest() is', smallestCoast);
}
