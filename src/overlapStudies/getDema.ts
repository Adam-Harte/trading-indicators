import { roundTo } from 'round-to';
import { getEma } from './ema';

export const getDema = (close: number[], period = 30) => {
  if (close.length < period) return null;

  const smoothing = 2 / (period + 1);

  const ema1 = getEma(close, period);
  const ema2 = ema1! * smoothing * (1 - smoothing);

  const dema = 2 * ema1! - ema2!;

  return roundTo(dema, 2);
};
