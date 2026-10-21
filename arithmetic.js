export function average(values) {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / (values.length - 1);
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
