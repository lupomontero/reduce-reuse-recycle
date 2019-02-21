const reduce = require('./reduce');

const forEach = (arr, fn) => reduce(
  arr,
  (_, item, idx, arr) => {
    fn(item, idx, arr);
  },
  undefined,
);

module.exports = forEach;
