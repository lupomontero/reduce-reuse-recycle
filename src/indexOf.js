const reduce = require('./reduce');

const indexOf = (arr, value) => reduce(
  arr,
  (prev, item, idx) => (
    (prev === -1 && item === value)
      ? idx
      : prev
  ),
  -1,
);

module.exports = indexOf;
