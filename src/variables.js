export const freeGb = 75;
export const defaultHeight = 26;
export const HDD = 'HDD';
export const SDD = 'SDD';
export const MULTI = 'Multi';
export const SINGLE = 'Single';


export const backblazeMinPrice = 7;
export const backblazeStorage1GbPrice = 0.005;
export const backblazeTransfer1GbPrice = 0.01;


export const bunnyMaxPrice = 10;
export const bunnyStorageHDD1GbPrice = 0.01;
export const bunnyStorageSDD1GbPrice = 0.02;
export const bunnyTransfer1GbPrice = 0.01;


export const scaleawayStorageMulti1GbPrice = 0.06;
export const scaleawayStorageSingle1GbPrice = 0.03;
export const scaleawayTransfer1GbPrice = 0.02;


export const vultMinPrice = 5;
export const vultStorage1GbPrice = 0.01;
export const vultTransfer1GbPrice = 0.01;

export const bunnyRB = document.querySelector('.radioBunny');
export const radioButtons = document.querySelectorAll('input[name="bunnyOption"]');

export const scaleawayRB = document.querySelector('.radioScaleaway');
export const scaleawayButtons = document.querySelectorAll(
  'input[name="scaleawayOption"]'
);

export const vars = {
  storageValue: 0,
  transferValue: 0,
  radioBunny: '',
  radioScaleaway: '',
  backblazeCoast: 0,
  bunnyCoast: 0,
  scaleawayCoast: 0,
  vultCoast: 0,
};

