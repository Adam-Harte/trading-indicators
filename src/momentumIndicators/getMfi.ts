import { roundTo } from 'round-to';

export const getMfi = (
  high: number[],
  low: number[],
  close: number[],
  volume: number[],
  period = 14
) => {
  if (
    period > high.length ||
    period > low.length ||
    period > close.length ||
    period > volume.length
  )
    return null;

  const sampleHigh = high.slice(-period);
  const sampleLow = low.slice(-period);
  const sampleClose = close.slice(-period);
  const sampleVolume = volume.slice(-period);

  const typicalPrices = sampleClose.map((c, i) => {
    const total = c + sampleHigh[i] + sampleLow[i];
    return total / 3;
  });

  const moneyFlow = typicalPrices.reduce(
    (acc: { positive: number[]; negative: number[] }, cur, i) => {
      if (i === 0) {
        return {
          positive: [...acc.positive, cur * sampleVolume[i]],
          negative: [...acc.negative],
        };
      }

      if (cur >= typicalPrices[i - 1]) {
        return {
          positive: [...acc.positive, cur * sampleVolume[i]],
          negative: [...acc.negative],
        };
      }

      return {
        positive: [...acc.positive],
        negative: [...acc.negative, -cur * sampleVolume[i]],
      };
    },
    {
      positive: [],
      negative: [],
    }
  );

  const positiveMoneyFlow = moneyFlow.positive.reduce(
    (acc, cur) => acc + cur,
    0
  );
  const negativeMoneyFlow = moneyFlow.negative.reduce(
    (acc, cur) => acc + cur,
    0
  );

  const moneyFlowRatio = positiveMoneyFlow / negativeMoneyFlow;

  const mfi = 100 - 100 / (1 + moneyFlowRatio);

  return roundTo(mfi, 2);
};
