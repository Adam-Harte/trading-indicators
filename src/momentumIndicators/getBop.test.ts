import { getBop } from './getBop';

const opens = [
  9.12, 21.57, 10.31, 14.94, 16.8, 9.72, 10.64, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 11.89, 15.39, 12.46, 11.73, 20.57,
  12.31, 16.32, 17.2, 14.26, 9.47, 13.95, 16.42, 13.18,
];

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

describe('balance of power', () => {
  it('should calculate the balance of power based on the given parameters', () => {
    const bop = getBop(opens, highs, lows, closes);

    expect(bop).toBe(-0.41);
  });

  it('should calculate the balance of power based on the given parameters ignoring the period and not smoothing if the period is greater than the array lengths given', () => {
    const bop = getBop(opens, highs, lows, closes, 50);

    expect(bop).toBe(-0.41);
  });

  it('should smooth the values used for bop calculation if a period is passed within the array lenths', () => {
    const bop = getBop(opens, highs, lows, closes);
    const smoothedBop = getBop(opens, highs, lows, closes, 14);

    expect(bop).toBe(-0.41);
    expect(smoothedBop).toBe(0.22);
  });
});
