export const getDm = (deltaHigh: number, deltaLow: number) => {
  if ((deltaHigh < 0 && deltaLow < 0) || deltaHigh === deltaLow) {
    return {
      plusDm: 0,
      minusDm: 0,
    };
  }

  if (deltaHigh > deltaLow) {
    return {
      plusDm: deltaHigh,
      minusDm: 0,
    };
  }

  return {
    plusDm: 0,
    minusDm: deltaLow,
  };
};
