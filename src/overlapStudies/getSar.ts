import { roundTo } from 'round-to';

export const getSar = (
  high: number[],
  low: number[],
  period: number,
  af = 0.02,
  prevSar = undefined
) => {
  if (period > high.length || period > low.length) return null;

  let psar;

  const sampleHighs = high.slice(-period);
  const sampleLows = low.slice(-period);
  const totalNewLows = sampleLows.reduce(
    (prev, _cur, i) => {
      if (sampleLows[i] < prev.currentLow) {
        return {
          newLows: prev.newLows++,
          currentLow: sampleLows[i],
        };
      }

      return prev;
    },
    {
      newLows: 1,
      currentLow: sampleLows[0],
    }
  );
  const totalNewHighs = sampleHighs.reduce(
    (prev, _cur, i) => {
      if (sampleHighs[i] > prev.currentHigh) {
        return {
          newHighs: prev.newHighs++,
          currentHigh: sampleHighs[i],
        };
      }

      return prev;
    },
    {
      newHighs: 1,
      currentHigh: sampleHighs[0],
    }
  );
  const lowestLow = Math.min(...sampleLows);
  const highestHigh = Math.max(...sampleHighs);
  const isTrendingUp =
    sampleHighs[-1] > sampleHighs[0] && sampleLows[-1] > sampleLows[0];
  const combinedAf = isTrendingUp
    ? af * totalNewHighs.newHighs
    : af * totalNewLows.newLows;
  const finalAf = combinedAf > 0.2 ? 0.2 : combinedAf;

  if (isTrendingUp) {
    const rpsar =
      (prevSar || lowestLow) + finalAf * (highestHigh - (prevSar || lowestLow));

    psar = roundTo(rpsar, 2);
  }

  if (!isTrendingUp) {
    const fpsar =
      (prevSar || highestHigh) -
      finalAf * ((prevSar || highestHigh) - lowestLow);

    psar = roundTo(fpsar, 2);
  }

  return psar;
};
