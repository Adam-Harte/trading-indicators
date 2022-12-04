import { roundTo } from 'round-to';

export const getUltOsc = (
  high: number[],
  low: number[],
  close: number[],
  period1 = 7,
  period2 = 14,
  period3 = 28
) => {
  if (high.length < period3 || low.length < period3 || close.length < period3)
    return null;

  const period1High = high.slice(0, -period1);
  const period1Low = low.slice(0, -period1);
  const period1Close = close.slice(0, -period1);
  const bp1 = period1Close[0] - Math.min(...period1Low);
  const tr1 = Math.max(...period1High) - Math.min(...period1Low);

  const period1Avg = bp1 / tr1;

  const period2High = high.slice(0, -period2);
  const period2Low = low.slice(0, -period2);
  const period2Close = close.slice(0, -period2);
  const bp2 = period2Close[0] - Math.min(...period2Low);
  const tr2 = Math.max(...period2High) - Math.min(...period2Low);

  const period2Avg = bp2 / tr2;

  const period3High = high.slice(0, -period3);
  const period3Low = low.slice(0, -period3);
  const period3Close = close.slice(0, -period3);
  const bp3 = period3Close[0] - Math.min(...period3Low);
  const tr3 = Math.max(...period3High) - Math.min(...period3Low);

  const period3Avg = bp3 / tr3;

  const ultOsc = ((period1Avg * 4 + period2Avg * 2 + period3Avg) / 7) * 100;

  return roundTo(ultOsc, 2);
};
