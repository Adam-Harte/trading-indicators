import { roundTo } from 'round-to';

export const getAdl = (
  high: number,
  low: number,
  close: number,
  volume: number,
  prevAdl = 0
) => {
  const clv = roundTo((close - low - (high - close)) / (high - low), 2);
  const mfv = roundTo(clv * volume, 2);
  const adl = prevAdl + mfv;

  return roundTo(adl, 2);
};
