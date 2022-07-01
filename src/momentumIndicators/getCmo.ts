import { roundTo } from 'round-to';

export const getCmo = (close: number[], period: number) => {
  if (period > close.length) return null;

  const sampleClose = close.slice(-period);

  const momentums = sampleClose.map((c, i) => {
    if (i === 0) {
      return {
        up: c,
        down: c,
      };
    }

    if (c > sampleClose[i - 1]) {
      return {
        up: c - sampleClose[i - 1],
        down: 0,
      };
    }

    if (c < sampleClose[i - 1]) {
      return {
        up: 0,
        down: sampleClose[i - 1] - c,
      };
    }

    return {
      up: 0,
      down: 0,
    };
  });

  const ups = momentums.reduce((prev, cur) => prev + cur.up, 0);
  const downs = momentums.reduce((prev, cur) => prev + cur.down, 0);

  const cmo = 100 * ((ups - downs) / (ups + downs));

  return roundTo(cmo, 2);
};
