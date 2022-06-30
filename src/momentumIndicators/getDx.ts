import { roundTo } from 'round-to';
import { getDi } from './getDi';

export const getDx = (high: number[], low: number[], period: number) => {
  if (period + 1 > high.length || period + 1 > low.length) return null;

  const di = getDi(high, low, period);

  const plusDi = di?.plusDi || 0;
  const minusDi = di?.minusDi || 0;

  const dx = 100 * ((plusDi - minusDi) / (plusDi + minusDi));

  return roundTo(dx, 2);
};
