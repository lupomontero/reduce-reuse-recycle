const reduce = require('./reduce');

const includes = (arr, value) => reduce(
  arr,
  (prev, item) => prev || item === value,
  false,
);

module.exports = includes;
