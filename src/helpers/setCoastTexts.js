import { vars } from "../variables.js";

export function setCoastTexts () {
  document.querySelector('.backblazeCoastText').innerHTML = `${vars.backblazeCoast.toFixed(2)}$`;
  document.querySelector('.bunnyCoastText').innerHTML = `${vars.bunnyCoast.toFixed(2)}$`;
  document.querySelector('.scaleawayCoastText').innerHTML = `${vars.scaleawayCoast.toFixed(2)}$`;
  document.querySelector('.vultrCoastText').innerHTML = `${vars.vultCoast.toFixed(2)}$`;
};
