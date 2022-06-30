import { roundTo } from 'round-to';
import { getDx } from './getDx';

export const getAdx = (
  high: number[],
  low: number[],
  period: number,
  prevAdx = undefined
) => {
  if (period + 2 > high.length || period + 2 > low.length) return null;

  const prevHighs = high.slice(-period - 2).slice(0, period + 1);
  const prevLows = low.slice(-period - 2).slice(0, period + 1);

  const firstAdx = getDx(prevHighs, prevLows, period)! / 14;
  const initialAdx = prevAdx || firstAdx;
  const currentDx = getDx(high, low, period);

  const adx = (initialAdx * (period - 1) + currentDx!) / period;

  return roundTo(adx, 2);
};
