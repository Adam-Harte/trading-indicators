import { getRsi } from './getRsi';

const closes = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37, 12.11,
];

describe('relative strength index', () => {
  it('should calculate the relative strength index based on the given parameters', () => {
    const rsi = getRsi(closes);

    expect(rsi).toBe(50.65);
  });

  it('should return null if the given period is greater than the close array', () => {
    const rsi = getRsi(closes, 35);

    expect(rsi).toBe(null);
  });
});
