import { roundTo } from 'round-to';

export const getAtr = (
  high: number[],
  low: number[],
  period: number,
  prevAtr = undefined
) => {
  if (period + 1 > high.length || period + 1 > low.length) return null;

  const periodHigh = high.slice(-period - 1);
  const periodLow = low.slice(-period - 1);

  const sampleHigh = periodHigh.slice(0, period);
  const sampleLow = periodLow.slice(0, period);

  const prevTrueRange = sampleHigh.map((h, i) => h - sampleLow[i]);
  const totalTrueRange = prevTrueRange.reduce((prev, cur) => prev + cur, 0);
  const initialAtr = totalTrueRange / period;

  const priorAtr = prevAtr || initialAtr;
  const trueRange = periodHigh[period] - periodLow[period];

  const atr = (priorAtr * (period - 1) + trueRange) / period;

  return roundTo(atr, 2);
};
