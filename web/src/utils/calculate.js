export const calculatePercentage = (min, max) =>
  min !== 0 && max > 0 ? Math.ceil((1 - min / max) * 100) : 0
