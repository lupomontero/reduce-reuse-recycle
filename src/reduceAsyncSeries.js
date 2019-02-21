const reduceAsyncSeries = (tasks, fn, initialValue) => {
  const recurse = (remaining, prev, idx) => (
    (!remaining.length)
      ? Promise.resolve(prev)
      : remaining[0]().then(
        result => recurse(
          remaining.slice(1),
          fn(prev, result, idx, tasks),
          idx + 1,
        ),
      )
  );

  return recurse(tasks, initialValue, 0);
};

module.exports = reduceAsyncSeries;
