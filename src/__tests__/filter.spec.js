const filter = require('../filter');

describe('filter', () => {
  it('should ...', () => {
    expect(filter([1, 2, 3], item => item > 2)).toEqual([3]);
    expect(filter([1, 2, 3], item => item > 2))
      .toEqual([1, 2, 3].filter(item => item > 2));
  });

  it.skip('...', () => {
    console.log(filter([1, 2, 3], (item, idx, arr) => {
      console.log(item, idx, arr);
      return item > 2;
    }));
  });
});
