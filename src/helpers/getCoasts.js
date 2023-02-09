import {
  vars,
  backblazeMinPrice,
  backblazeStorage1GbPrice,
  backblazeTransfer1GbPrice,
  bunnyMaxPrice,
  bunnyStorageHDD1GbPrice,
  bunnyStorageSDD1GbPrice,
  bunnyTransfer1GbPrice,
  HDD,
  SDD,
  scaleawayStorageMulti1GbPrice,
  scaleawayStorageSingle1GbPrice,
  scaleawayTransfer1GbPrice,
  freeGb,
  MULTI,
  SINGLE,
  vultMinPrice,
  vultStorage1GbPrice,
  vultTransfer1GbPrice
} from '../variables.js';

export function getCoasts () {
  vars.backblazeCoast =
    backblazeMinPrice +
    (vars.storageValue * backblazeStorage1GbPrice) +
    (vars.transferValue * backblazeTransfer1GbPrice);

  if (vars.radioBunny === HDD) {
    vars.bunnyCoast = (vars.storageValue * bunnyStorageHDD1GbPrice) + (vars.transferValue * bunnyTransfer1GbPrice);
  } else if (vars.radioBunny === SDD) {
    vars.bunnyCoast = (vars.storageValue * bunnyStorageSDD1GbPrice) + (vars.transferValue * bunnyTransfer1GbPrice);
  }

  if (vars.bunnyCoast > bunnyMaxPrice) {
    vars.bunnyCoast = bunnyMaxPrice;
  }

  if (
    vars.radioScaleaway === MULTI &&
    (vars.storageValue > freeGb || vars.transferValue > freeGb)
  ) {
    const scaleawayByStorageValueMulti = vars.storageValue > freeGb ? (vars.storageValue - freeGb) * scaleawayStorageMulti1GbPrice : 0;
    const scaleawayByTransferValueMulti = vars.transferValue > freeGb ? (vars.transferValue - freeGb) * scaleawayTransfer1GbPrice : 0;
    vars.scaleawayCoast = scaleawayByStorageValueMulti + scaleawayByTransferValueMulti;
  } else if (
    vars.radioScaleaway === SINGLE &&
    (vars.storageValue > freeGb || vars.transferValue > freeGb)
  ) {
    const scaleawayByStorageValueSingle = vars.storageValue > freeGb ? (vars.storageValue - freeGb) * scaleawayStorageSingle1GbPrice : 0;
    const scaleawayByTransferValueSingle = vars.transferValue > freeGb ? (vars.transferValue - freeGb) * scaleawayTransfer1GbPrice : 0;
    vars.scaleawayCoast = scaleawayByStorageValueSingle + scaleawayByTransferValueSingle;
  } else if (vars.storageValue <= freeGb && vars.transferValue <= freeGb) {
    vars.scaleawayCoast = 0;
  }

  vars.vultCoast = vultMinPrice + (vars.storageValue * vultStorage1GbPrice) + (vars.transferValue * vultTransfer1GbPrice);
};
