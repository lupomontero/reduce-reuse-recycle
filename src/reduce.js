const reduceImperative = (arr, fn, initialValue) => {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = fn(accumulator, arr[i], i, arr);
  }
  return accumulator;
};

const reduceNative = (arr, fn, initialValue) => arr.reduce(fn, initialValue);

const reduceNaive = (arr, fn, initialValue) => (
  (!arr.length)
    ? initialValue
    : reduceNaive(arr.slice(1), fn, fn(initialValue, arr[0]))
);

const reduce = (arr, fn, initialValue) => {
  const recurse = (remaining, prev, idx) => (
    (!remaining.length)
      ? prev
      : recurse(remaining.slice(1), fn(prev, remaining[0], idx, arr), idx + 1)
  );

  return recurse(arr, initialValue, 0);
};

module.exports = reduce;
module.exports.reduce = reduce;
module.exports.reduceImperative = reduceImperative;
module.exports.reduceNative = reduceNative;
module.exports.reduceNaive = reduceNaive;


// const find = (arr, fn) => {};
// const findIndex = (arr, fn) => {};
// const every = (arr, fn) => {};
// const some = (arr, fn) => {};
// const fill = (arr, value, start, end) => {};
// const flat = (arr, depth) => {};
// const flatMap = (arr, fn) => {};
