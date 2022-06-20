import { getEma } from './ema';

const closes = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37,
];

describe('ema', () => {
  it('should calculate the exponential moving average based on the given parameters', () => {
    const ema = getEma(closes, 10);

    expect(ema).toBe(14.49);
  });

  it('should return null if the given period is greater than the close array', () => {
    const ema = getEma(closes, 50);

    expect(ema).toBe(null);
  });
});
