const fs = require('fs');
const path = require('path');
// const { promisify } = require('util');
const reduceAsyncSeries = require('../reduceAsyncSeries');

describe('reduceAsyncSeries', () => {
  it('...', () => {
    const files = ['reduce.js', 'reduceAsync.js'];
    // const readFile = promisify(fs.readFile);
    const readFile = (file, encoding) => Promise.resolve(`${file} ${encoding}...`);
    return reduceAsyncSeries(
      files.map(file => () => readFile(path.join(__dirname, file), 'utf8')),
      (memo, result, idx) => ({ ...memo, [files[idx]]: result.length }),
      {},
    )
      .then(result => expect(result).toMatchSnapshot());
  });
});
