import { getTr } from './getTr';

describe('true range', () => {
  it('should calculate the true range based on the given parameter', () => {
    const trueRange = getTr(20, 14, 16);

    expect(trueRange).toBe(6);
  });

  it('should calculate the true range using previousClose when its lower than the low', () => {
    const trueRange = getTr(20, 14, 12);

    expect(trueRange).toBe(8);
  });

  it('should calculate the true range using previousClose when its higher than the high', () => {
    const trueRange = getTr(20, 14, 25);

    expect(trueRange).toBe(11);
  });
});
