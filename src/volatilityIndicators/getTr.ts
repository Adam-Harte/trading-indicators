import { roundTo } from 'round-to';

export const getTr = (high: number, low: number, previousClose: number) => {
  let trueRange;

  if (previousClose < low) {
    trueRange = high - previousClose;
  } else if (previousClose > high) {
    trueRange = previousClose - low;
  } else {
    trueRange = high - low;
  }

  return roundTo(trueRange, 2);
};
