import { getAdo } from './getAdo';

const adl = [7.12, 7.59, 6.36, 5.19, 7.48, 9.73, 8.85, 9.41, 7.92, 7.24];

describe('chaikin accumulation distribution oscillator', () => {
  it('should calculate the chaikin accumulation distribution oscillator based on the given parameters', () => {
    const ado = getAdo(adl);

    expect(ado).toBe(11.41);
  });

  it('should return null if the adl array isnt at least length 10', () => {
    const ado = getAdo(adl.slice(-9));

    expect(ado).toBe(null);
  });
});
