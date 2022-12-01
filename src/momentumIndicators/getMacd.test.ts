import { getMacd } from './getMacd';

const closes = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37, 12.11, 8.92, 11.85,
  10.94, 13.29, 14.71, 12.47, 12.52,
];

describe('moving average convergence divergence', () => {
  it('should calculate the moving average convergence divergence based on the given parameters', () => {
    const macd = getMacd(closes);

    expect(macd).toEqual({
      macd: 1.76,
      signalLine: 0.57,
      histogram: 1.19,
    });
  });

  it('should return null if the given period is greater than the close array', () => {
    const macd = getMacd(closes, 12, 30, 15);

    expect(macd).toBe(null);
  });
});
