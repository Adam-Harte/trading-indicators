import { roundTo } from 'round-to';

export const getWillR = (
  high: number[],
  low: number[],
  close: number[],
  period = 14
) => {
  if (high.length < period || low.length < period || close.length < period)
    return null;

  const currentClose = close[0];
  const highestHigh = Math.max(...high.slice(0, -period));
  const lowestLow = Math.min(...low.slice(0, -period));

  const willR = (highestHigh - currentClose) / (highestHigh - lowestLow);

  return roundTo(willR, 2);
};
