import { getStdDev } from './getStdDev';

const data = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37,
];

describe('standard deviation', () => {
  it('should calculate the standard deviation based on the given parameters', () => {
    const stdDev = getStdDev(data, 10);

    expect(stdDev).toBe(14.94);
  });

  it('should return null if the given period is greater than the data array', () => {
    const stdDev = getStdDev(data, 50);

    expect(stdDev).toBe(null);
  });
});
