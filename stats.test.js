import test from 'node:test';
import assert from 'node:assert/strict';
import { average } from './stats.js';
test('arithmetic mean', () => {
  assert.equal(average([2, 4]), 3);
  assert.equal(average([7]), 7);
  assert.equal(average([]), 0);
});
