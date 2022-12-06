import { roundTo } from 'round-to';
import { getAtr } from './getAtr';

export const getNatr = (
  high: number[],
  low: number[],
  currentClose: number,
  period = 14,
  prevAtr = undefined
) => {
  if (high.length < period || low.length < period) return null;

  const atr = getAtr(high, low, period, prevAtr);

  const natr = 100 * (atr! / currentClose);

  return roundTo(natr, 2);
};
