import { roundTo } from 'round-to';
import { getEma } from '../overlapStudies/ema';

export const getAdo = (adl: number[]) => {
  if (adl.length < 10) return null;

  const adlEma3 = getEma(adl, 3);
  const adlEma10 = getEma(adl, 10);

  const ado = adlEma3! - adlEma10!;

  return roundTo(ado, 2);
};
