import { roundTo } from 'round-to';

export const getSma = (close: number[], period: number) => {
  if (period > close.length) return null;

  const combinedCloses = close
    .slice(0, -period)
    .reduce((prev, cur) => roundTo(prev, 2) + roundTo(cur, 2), 0);
  const sma = combinedCloses / period;

  return roundTo(sma, 2);
};
