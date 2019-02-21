const reduce = require('./reduce');

const reverse = (arr) => reduce(
  arr,
  (prev, item) => [item, ...prev],
  [],
);

module.exports = reverse;
