import { roundTo } from 'round-to';
import { getAroon } from './getAroon';

export const getAroonOsc = (high: number[], low: number[], period: number) => {
  if (period > high.length || period > low.length) return null;

  const aroon = getAroon(high, low, period);
  const aroonUp = aroon?.aroonUp || 0;
  const aroonDown = aroon?.aroonDown || 0;
  const aroonOsc = aroonUp - aroonDown;

  return roundTo(aroonOsc, 2);
};
