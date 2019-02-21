const reduce = require('./reduce');

const filter = (arr, fn) => reduce(
  arr,
  (prev, item, idx, arr) => (
    !!fn(item, idx, arr)
      ? [...prev, item]
      : prev
  ),
  [],
);

module.exports = filter;
