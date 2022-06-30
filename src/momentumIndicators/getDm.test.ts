import { getDm } from './getDm';

describe('directional movement', () => {
  it('should return plusDm with high and minusDm with 0 when high is greater than low', () => {
    const dm = getDm(20.37, 18.12);

    expect(dm).toStrictEqual({ minusDm: 0, plusDm: 20.37 });
  });

  it('should return plusDm with 0 and minusDm with low when high is less than low', () => {
    const dm = getDm(18.91, 19.73);

    expect(dm).toStrictEqual({ minusDm: 19.73, plusDm: 0 });
  });

  it('should return plusDm with 0 and minusDm with 0 when high and low are less than 0', () => {
    const dm = getDm(-1.35, -1.74);

    expect(dm).toStrictEqual({ minusDm: 0, plusDm: 0 });
  });

  it('should return plusDm with 0 and minusDm with 0 when high and low are equal', () => {
    const dm = getDm(16.45, 16.45);

    expect(dm).toStrictEqual({ minusDm: 0, plusDm: 0 });
  });
});
