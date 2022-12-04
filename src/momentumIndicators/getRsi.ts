import { roundTo } from 'round-to';

export const getRsi = (close: number[], period = 14) => {
  if (period > close.length) return null;

  const sampleClose = close.slice(0, -period);

  const gains = sampleClose.map((c, i) => {
    if (i === 0) return 0;

    if (c > sampleClose[i - 1]) {
      return c - sampleClose[i - 1];
    }

    return 0;
  });

  const losses = sampleClose.map((c, i) => {
    if (i === 0) return 0;

    if (c < sampleClose[i - 1]) {
      return sampleClose[i - 1] - c;
    }

    return 0;
  });

  const totalGains = gains.reduce((acc, cur) => acc + cur, 0);
  const totalLosses = losses.reduce((acc, cur) => acc + cur, 0);

  const avgGain = totalGains / period;
  const avgLoss = totalLosses / period;

  const relativeStrength = avgGain / avgLoss;

  const rsi = 100 - 100 / (1 + relativeStrength);

  return roundTo(rsi, 2);
};
