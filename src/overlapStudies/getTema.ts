import { roundTo } from 'round-to';
import { getEma } from './ema';

export const getTema = (close: number[], period = 30) => {
  if (close.length < period) return null;

  const smoothing = 2 / (period + 1);

  const ema1 = getEma(close, period);
  const ema2 = ema1! * smoothing * (1 - smoothing);
  const ema3 = ema2! * smoothing * (1 - smoothing);

  const tema = 3 * ema1! - 3 * ema2! + ema3;

  return roundTo(tema, 2);
};
