import { getNatr } from './getNatr';

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

describe('normalized average true range', () => {
  it('should calculate the normalized avergae true range based on the given parameters', () => {
    const natr = getNatr(highs, lows, 12.36);

    expect(natr).toBe(15.13);
  });

  it('should return null if the period is greater than the given high or low array', () => {
    const natr = getNatr(highs, lows, 12.36, 35);

    expect(natr).toBe(null);
  });
});
