import { roundTo } from 'round-to';

export const getObv = (close: number[], volume: number[], period: number) => {
  if (period > close.length || period > volume.length) return null;

  const sampleClose = close.slice(-period);
  const sampleVolume = volume.slice(-period);

  const obv = sampleVolume.reduce((prev, cur, i) => {
    if (i === 0) return prev;

    if (sampleClose[i] > sampleClose[i - 1]) {
      return prev + cur;
    }

    if (sampleClose[i] < sampleClose[i - 1]) {
      return prev - cur;
    }

    return prev;
  }, sampleVolume[0]);

  return roundTo(obv, 2);
};
