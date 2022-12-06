import { getTema } from './getTema';

const closes = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37, 15.89, 13.21,
];

describe('triple exponential moving average', () => {
  it('should calculate the triple exponential moving avergae based on the given parameters', () => {
    const tema = getTema(closes);

    expect(tema).toBe(26.31);
  });

  it('should return null if the period is greater than the close array', () => {
    const tema = getTema(closes, 35);

    expect(tema).toBe(null);
  });
});
