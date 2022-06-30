import { roundTo } from 'round-to';
import { getAtr } from '../volatilityIndicators/getAtr';
import { getDm } from './getDm';

export const getDi = (high: number[], low: number[], period: number) => {
  if (period + 1 > high.length || period + 1 > low.length) return null;

  const sampleHigh = high.slice(-period - 1);
  const sampleLow = low.slice(-period - 1);

  const dirMov = sampleHigh.map((h, i) => {
    const deltaHigh = i === 0 ? h : sampleHigh[i - 1] - h;
    const deltaLow = i === 0 ? sampleLow[i] : sampleLow[i] - sampleLow[i - 1];
    if (i === 0) {
      return getDm(deltaHigh, deltaLow);
    }

    return getDm(deltaHigh, deltaLow);
  });

  const prevTotalPlusDm = dirMov
    .slice(0, period)
    .reduce((prev, cur) => prev + cur.plusDm, 0);
  const prevTotalMinusDm = dirMov
    .slice(0, period)
    .reduce((prev, cur) => prev + cur.minusDm, 0);

  const prevAvgPlusDm = prevTotalPlusDm / period;
  const prevAvgMinusDm = prevTotalMinusDm / period;
  const atr = getAtr(high, low, period);

  const plusDmSum =
    prevAvgPlusDm - prevAvgPlusDm / period + dirMov[period].plusDm;
  const minusDmSum =
    prevAvgMinusDm - prevAvgMinusDm / period + dirMov[period].minusDm;

  const plusDi = roundTo(100 * (plusDmSum / atr!), 2);
  const minusDi = roundTo(100 * (minusDmSum / atr!), 2);

  return {
    plusDi,
    minusDi,
  };
};
