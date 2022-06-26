import { roundTo } from 'round-to';
import { getSma } from '../overlapStudies/sma';

export const getStdDev = (data: number[], period: number) => {
  if (period > data.length) return null;

  const sample = data.slice(-period);
  const initialSma = getSma(data, period);

  const minusSmaSquared = sample.map((s) => Math.pow(s - initialSma!, 2));

  const combinedSamples = minusSmaSquared.reduce(
    (prev, cur) => roundTo(prev, 2) + roundTo(cur, 2),
    0
  );

  const finalSma = combinedSamples / (period - 1);

  const stdDev = Math.sqrt(finalSma);

  return roundTo(stdDev, 2);
};
