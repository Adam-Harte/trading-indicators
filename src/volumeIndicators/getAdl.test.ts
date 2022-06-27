import { getAdl } from './getAdl';

describe('chaikin accumulation distribution line', () => {
  it('should calculate the chaikin accumulation distribution line based on the given parameters', () => {
    const adl = getAdl(22.14, 18.12, 21.45, 10.76);

    expect(adl).toBe(7.1);
  });
});
