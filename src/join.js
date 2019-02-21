const reduce = require('./reduce');

const join = (arr, separator = ',') => reduce(
  arr,
  (prev, item) => (
    (prev)
      ? `${prev}${separator}${item}`
      : `${item}`
  ),
  '',
);

module.exports = join;
