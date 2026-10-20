/** Arithmetic mean; the empty input has mean 0. */
export function average(values) {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / (values.length - 1);
}
