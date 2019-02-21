const map = require('../map');

describe('map', () => {
  it('should work as Array.prototype.map', () => {
    expect(map([1, 2, 3], item => item * 2)).toEqual([2, 4, 6]);
    expect(map([1, 2, 3], item => item * 2))
      .toEqual([1, 2, 3].map(item => item * 2));
  });

  it('invoke fn passing idx and ref to original array', () => {
    expect(map([1, 2, 3], (item, idx, arr) => [item, idx, arr]))
      .toEqual([
        [ 1, 0, [ 1, 2, 3 ] ],
        [ 2, 1, [ 1, 2, 3 ] ],
        [ 3, 2, [ 1, 2, 3 ] ],
      ]);
  });
});
