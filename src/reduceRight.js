const reduce = require('./reduce');

const reduceRight = (arr, fn, initialValue) => {
  const recurse = (remaining, prev, idx) => (
    (!remaining.length)
      ? prev
      : recurse(
        remaining.slice(0, -1),
        fn(prev, remaining[idx], idx, arr),
        idx - 1,
      )
  );

  return recurse(arr, initialValue, arr.length - 1);
};

module.exports = reduceRight
