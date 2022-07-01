import { getCmo } from './getCmo';

const closes = [
  10.12, 20.57, 12.31, 18.94, 17.2, 9.81, 11.21, 13.95, 16.42, 12.46, 10.12,
  21.04, 12.31, 18.94, 17.2, 9.73, 11.21, 13.95, 15.39, 12.46, 10.12, 20.57,
  12.31, 18.94, 17.2, 14.26, 11.21, 13.95, 16.42, 12.37,
];

describe('chande momentum oscillator', () => {
  it('should calculate the chande momentum oscillator based on the given parameters', () => {
    const cmo = getCmo(closes, 10);

    expect(cmo).toBe(3.6);
  });

  it('should return null if the given period is greater than the close array', () => {
    const cmo = getCmo(closes, 50);

    expect(cmo).toBe(null);
  });
});
