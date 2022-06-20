import { roundTo } from 'round-to';

export const getWma = (close: number[], period: number) => {
  if (period > close.length) return null;

  let wmaDivider = 0;

  for (let i = 1; i < period + 1; i++) {
    wmaDivider = wmaDivider + i;
  }

  const periodCloses = close.slice(-period).reverse();
  const combinedCloses = periodCloses.reduce(
    (prev, cur, idx) => roundTo(prev, 2) + roundTo(cur * (period - idx), 2),
    0
  );
  const wma = combinedCloses / wmaDivider;

  return roundTo(wma, 2);
};
