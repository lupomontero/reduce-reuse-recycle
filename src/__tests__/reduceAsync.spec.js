const fs = require('fs');
const path = require('path');
// const { promisify } = require('util');
const reduceAsync = require('../reduceAsync');

describe('reduceAsync', () => {
  it('...', () => {
    const files = ['reduce.js', 'reverse.js'];
    // const readFile = promisify(fs.readFile);
    const readFile = (file, encoding) => Promise.resolve(`${file} ${encoding}...`);

    return reduceAsync(
      files.map(file => () => readFile(path.join(__dirname, '../', file), 'utf8')),
      (memo, result, idx) => ({ ...memo, [files[idx]]: result.length }),
      {},
    )
      .then(result => expect(result).toMatchSnapshot());
  });
});
