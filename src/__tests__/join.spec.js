const join = require('../join');

describe('join', () => {
  it('should join using default separator (,) when not specified', () => {
    expect(join(['a', 'b', 'c'])).toBe('a,b,c');
  });

  it('should join using a user defined separator', () => {
    expect(join(['a', 'b', 'c'], '|')).toBe('a|b|c');
  });
});

module.exports = join;
