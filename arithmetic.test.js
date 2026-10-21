import assert from 'node:assert/strict';
import test from 'node:test';
import { average, clamp } from './arithmetic.js';

test('average returns the arithmetic mean', () => {
  assert.equal(average([2, 4]), 3);
});

test('average returns the only value for a singleton', () => {
  assert.equal(average([7]), 7);
});

test('average returns zero for an empty array', () => {
  assert.equal(average([]), 0);
});

test('clamp returns the lower bound for values below it', () => {
  assert.equal(clamp(-2, 0, 10), 0);
});

test('clamp preserves values inside the range', () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test('clamp returns the upper bound for values above it', () => {
  assert.equal(clamp(12, 0, 10), 10);
});
