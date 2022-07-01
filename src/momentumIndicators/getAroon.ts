import { roundTo } from 'round-to';

export const getAroon = (high: number[], low: number[], period: number) => {
  if (period > high.length || period > low.length) return null;

  const sampleHigh = high.slice(-period);
  const sampleLow = low.slice(-period);

  const highestHigh = Math.max(...sampleHigh);
  const lowestLow = Math.min(...sampleLow);
  const highestHighIndex = sampleHigh.indexOf(highestHigh);
  const lowestLowIndex = sampleLow.indexOf(lowestLow);
  const periodSinceHighestHigh = period - (highestHighIndex + 1);
  const periodSinceLowestLow = period - (lowestLowIndex + 1);

  const aroonUp = 100 * ((period - periodSinceHighestHigh) / period);
  const aroonDown = 100 * ((period - periodSinceLowestLow) / period);

  return {
    aroonUp: roundTo(aroonUp, 2),
    aroonDown: roundTo(aroonDown, 2),
  };
};
