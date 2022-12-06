import { getDema } from './getDema';

const closes = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37, 15.89, 13.21,
];

describe('double exponential moving average', () => {
  it('should calculate the double exponential moving avergae based on the given parameters', () => {
    const dema = getDema(closes);

    expect(dema).toBe(18.08);
  });

  it('should return null if the period is greater than the close array', () => {
    const dema = getDema(closes, 35);

    expect(dema).toBe(null);
  });
});
