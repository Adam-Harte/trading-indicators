import { getBb } from './getBb';

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

describe('bollinger bands', () => {
  it('should calculate the bollinger bands based on the given parameters', () => {
    const bb = getBb(highs, lows, closes, 10);

    expect(bb).toStrictEqual({
      lowerBand: -31.66,
      midBand: 0,
      upperBand: 31.66,
    });
  });

  it('should return null if the given period is greater than the high, low or close array', () => {
    const bb = getBb(highs, lows, closes, 50);

    expect(bb).toBe(null);
  });
});
