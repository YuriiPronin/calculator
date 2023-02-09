import { scaleawayRB, scaleawayButtons, vars } from '../variables.js';

export function getScaleawayRadioButton () {
  scaleawayRB.addEventListener('click', () => {
    for (const scaleawayButton of scaleawayButtons) {
      if (scaleawayButton.checked) {
        vars.radioScaleaway = scaleawayButton.value;
      }
    }
  });
};
