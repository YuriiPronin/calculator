import { bunnyRB, radioButtons, vars } from '../variables.js';

export function getBunnyRadioButton () {
  bunnyRB.addEventListener('click', () => {
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        vars.radioBunny = radioButton.value;
      }
    }
  });
};
