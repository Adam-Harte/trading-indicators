import { roundTo } from 'round-to';
import { getSma } from '../overlapStudies/sma';

export const getBop = (
  open: number[],
  high: number[],
  low: number[],
  close: number[],
  period = 0
) => {
  const lastOpen = open.slice(-1);
  const lastHigh = high.slice(-1);
  const lastLow = low.slice(-1);
  const lastClose = close.slice(-1);

  if (
    !!period &&
    period <= open.length &&
    period <= high.length &&
    period <= low.length &&
    period <= close.length
  ) {
    const smaOpen = getSma(open, period);
    const smaHigh = getSma(high, period);
    const smaLow = getSma(low, period);
    const smaClose = getSma(close, period);

    const smoothedBop = (smaClose! - smaOpen!) / (smaHigh! - smaLow!);

    return roundTo(smoothedBop, 2);
  }

  const bop = (lastClose[0] - lastOpen[0]) / (lastHigh[0] - lastLow[0]);

  return roundTo(bop, 2);
};
