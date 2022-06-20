import { roundTo } from 'round-to';
import { getSma } from './sma';

export const getEma = (close: number[], period: number) => {
  if (period > close.length) return null;

  const smoothing = 2 / (period + 1);
  const previousSma = getSma(close.slice(-(period + 1)), period);
  const periodCloses = close.slice(-period).reverse();
  const currentPrice = periodCloses[0];

  const ema = currentPrice * (smoothing + previousSma!) * (1 - smoothing);

  return roundTo(ema, 2);
};
