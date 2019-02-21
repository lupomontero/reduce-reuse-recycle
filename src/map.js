const reduce = require('./reduce');

const map = (arr, fn) => reduce(
  arr,
  (prev, item, idx, arr) => [...prev, fn(item, idx, arr)],
  [],
);

module.exports = map;
