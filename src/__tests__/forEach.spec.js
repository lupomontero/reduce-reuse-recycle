const forEach = require('../forEach');

describe('forEach', () => {
  it('should ...', () => {
    const fn = jest.fn();
    expect(forEach([1, 2, 3], fn)).toBe(undefined);
    expect(fn.mock.calls).toEqual([
      [ 1, 0, [ 1, 2, 3 ] ],
      [ 2, 1, [ 1, 2, 3 ] ],
      [ 3, 2, [ 1, 2, 3 ] ],
    ]);
  });
});
