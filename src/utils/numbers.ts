export const getDecimals = (value: number): number => {
  return Number(value.toString().split('.')[1]) || 0;
};
