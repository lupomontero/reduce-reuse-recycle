const reduce = require('./reduce');

const reduceAsync = (tasks, fn, initialValue) => Promise.all(
  tasks.map(task => task()),
)
  .then(results => reduce(results, fn, initialValue));

module.exports = reduceAsync;
