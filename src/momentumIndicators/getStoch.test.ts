import { getStoch, MaTypes } from './getStoch';

const highs = [
  11.12, 21.57, 13.31, 19.94, 18.2, 10.81, 12.21, 14.95, 17.42, 13.46, 11.12,
  22.04, 13.31, 19.94, 18.2, 10.73, 12.21, 14.95, 16.39, 13.46, 11.12, 21.57,
  13.31, 19.94, 16.2, 15.26, 12.21, 14.95, 17.42, 13.37,
];

const lows = [
  9.12, 19.57, 11.31, 17.94, 16.2, 8.81, 10.21, 12.95, 15.42, 11.46, 9.12,
  20.04, 11.31, 17.94, 16.2, 8.73, 10.21, 12.95, 14.39, 11.46, 9.12, 19.57,
  11.31, 17.94, 16.2, 13.26, 10.21, 12.95, 15.42, 11.37,
];

const closes = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37,
];

describe('stochastic', () => {
  it('should calculate the stochastic based on the given parameters', () => {
    const stoch = getStoch(highs, lows, closes);

    expect(stoch).toEqual({ d: 0, k: 9.9 });
  });

  it('should calculate the stochastic based on the given parameters and an exponential moving average', () => {
    const stoch = getStoch(highs, lows, closes, 14, 3, MaTypes.EMA);

    expect(stoch).toEqual({ d: 0, k: 9.9 });
  });

  it('should calculate the stochastic based on the given parameters and a weighted moving average', () => {
    const stoch = getStoch(highs, lows, closes, 14, 3, MaTypes.WMA);

    expect(stoch).toEqual({ d: 33.33, k: 9.9 });
  });

  it('should return null if the given kPeriod + dPeriod is greater than the high, close, low or volume array', () => {
    const stoch = getStoch(highs, lows, closes, 32);

    expect(stoch).toBe(null);
  });
});
