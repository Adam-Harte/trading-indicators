import { roundTo } from 'round-to';
import { getSma } from '../overlapStudies/sma';
import { getStdDev } from '../utils/getStdDev';

export const getBb = (
  high: number[],
  low: number[],
  close: number[],
  period: number,
  nbDevUp = 2,
  nbDevDown = 2
) => {
  if (period > high.length || period > low.length || period > close.length)
    return null;

  const sampleHighs = high.slice(-period);
  const sampleLows = low.slice(-period);
  const sampleCloses = close.slice(-period);
  const typicalPrices = sampleHighs.map((h, i) => {
    const typicalPrice = (h + sampleLows[i] + sampleCloses[i]) / 3;

    return roundTo(typicalPrice, 2);
  });

  const midBand = getSma(typicalPrices, period);
  const upperBand = roundTo(
    midBand! + nbDevUp * getStdDev(typicalPrices, period)!,
    2
  );
  const lowerBand = roundTo(
    midBand! - nbDevDown * getStdDev(typicalPrices, period)!,
    2
  );

  return {
    midBand,
    upperBand,
    lowerBand,
  };
};
