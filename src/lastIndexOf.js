const reduce = require('./reduce');

const lastIndexOf = (arr, value) => reduce(
  arr,
  (prev, item, idx) => (
    (item === value)
      ? idx
      : prev
  ),
  -1,
);

module.exports = lastIndexOf;
