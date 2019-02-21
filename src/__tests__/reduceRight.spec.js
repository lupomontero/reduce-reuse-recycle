const reduceRight = require('../reduceRight');

describe('reduceRight', () => {
  it('should reduce to number', () => {
    expect(reduceRight(
      [1, 2, 3],
      (prev, item) => prev + item, 0),
    ).toBe(6);
  });

  it('should reduce to string', () => {
    expect(reduceRight(
      ['a', 'b', 'c'],
      (prev, item) => (prev ? `${prev}-${item}` : item),
      '',
    )).toBe('c-b-a');
  });

  it.skip('...', () => {
    console.log(reduceRight(['a', 'b', 'c'], (prev, item, idx, arr) => {
      console.log(item, idx, arr);
      return prev ? `${prev}-${item}` : item;
    }, ''));
  });
});
