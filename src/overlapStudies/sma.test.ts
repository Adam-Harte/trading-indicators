import { getSma } from './sma';

const closes = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37,
];

describe('sma', () => {
  it('should calculate the simple moving average based on the given parameters', () => {
    const sma = getSma(closes, 10);

    expect(sma).toBe(28.53);
  });

  it('should return null if the given period is greater than the close array', () => {
    const sma = getSma(closes, 50);

    expect(sma).toBe(null);
  });
});
