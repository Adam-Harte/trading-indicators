import { roundTo } from 'round-to';
import { getEma } from '../overlapStudies/ema';
import { getSma } from '../overlapStudies/sma';
import { getWma } from '../overlapStudies/wma';

export enum MaTypes {
  'SMA' = 'SMA',
  'EMA' = 'EMA',
  'WMA' = 'WMA',
}

export const getStoch = (
  high: number[],
  low: number[],
  close: number[],
  kPeriod = 14,
  dPeriod = 3,
  maType = MaTypes.SMA
) => {
  const limit = kPeriod + dPeriod;
  if (high.length < limit || low.length < limit || close.length < limit)
    return null;

  const sampleHigh = high.slice(0, kPeriod);
  const sampleLow = low.slice(0, kPeriod);

  const currentClose = close[0];
  const highestHigh = Math.max(...sampleHigh);
  const lowestLow = Math.min(...sampleLow);

  const k = ((currentClose - lowestLow) / (highestHigh - lowestLow)) * 100;

  const dHigh = close.slice(0, limit);
  const dLow = close.slice(0, limit);
  const dClose = close.slice(0, limit);

  const kLines = dClose
    .map((c, i) => {
      if (i < dPeriod) {
        const highest = Math.max(...dHigh.slice(i, dPeriod + i));
        const lowest = Math.min(...dLow.slice(i, dPeriod + i));

        return ((c - lowest) / (highest - lowest)) * 100;
      }

      return null;
    })
    .filter((kLine) => kLine !== null);

  let d = getSma(kLines as number[], dPeriod);

  if (maType === MaTypes.EMA) d = getEma(kLines as number[], dPeriod);
  if (maType === MaTypes.WMA) d = getWma(kLines as number[], dPeriod);

  return {
    k: roundTo(k, 2),
    d: roundTo(d!, 2),
  };
};
