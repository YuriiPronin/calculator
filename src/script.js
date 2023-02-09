import { getBunnyRadioButton } from './helpers/getBunnyRadioButton.js';
import { getScaleawayRadioButton } from './helpers/getScaleawayRadioButton.js';
import { getCoasts } from './helpers/getCoasts.js';
import { setHeights } from './helpers/setHeights.js';
import { setStyleForSmallestColumn } from './helpers/setStyleForSmallestColumn.js';
import { setCoastTexts } from './helpers/setCoastTexts.js';
import { vars } from './variables.js';

getBunnyRadioButton();

getScaleawayRadioButton();

window.addEventListener('change', (element) => {
  if (element.target.id === 'myRangeStorage') {
    vars.storageValue = element.target.value;
    document.querySelector(
      '.optional__textStorage'
    ).innerHTML = `Storage: ${vars.storageValue}Gb`;
  }
  if (element.target.id === 'myRangeTransfer') {
    vars.transferValue = element.target.value;
    document.querySelector(
      '.optional__textTranfer'
    ).innerHTML = `Transfer: ${vars.transferValue}Gb`;
  }

  getCoasts();

  setHeights();

  setCoastTexts();

  setStyleForSmallestColumn();
});
