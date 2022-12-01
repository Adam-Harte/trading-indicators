import { roundTo } from 'round-to';
import { getEma } from '../overlapStudies/ema';

export const getMacd = (
  close: number[],
  fastPeriod = 12,
  slowPeriod = 26,
  signalPeriod = 9
) => {
  const minimum = slowPeriod + signalPeriod;

  if (close.length < minimum) return null;

  const macdLines = close
    .slice(0, slowPeriod + signalPeriod + 1)
    .map((_c, i) => {
      if (i > slowPeriod) return null;

      const fastEma = getEma(close.slice(i, i + fastPeriod), fastPeriod);
      const slowEma = getEma(close.slice(i, i + slowPeriod), slowPeriod);

      return fastEma! - slowEma!;
    })
    .filter((macd) => macd !== null);

  const macd = roundTo(macdLines[0] as number, 2);

  const signalLine = getEma(macdLines as number[], signalPeriod);

  const histogram = roundTo(macd - signalLine!, 2);

  return {
    macd,
    signalLine,
    histogram,
  };
};
