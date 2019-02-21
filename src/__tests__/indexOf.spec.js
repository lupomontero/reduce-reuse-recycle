const indexOf = require('../indexOf');

describe('indexOf', () => {
  it('should return -1 when not found', () => {
    expect(indexOf(['a', 'b', 'c'], 'd')).toBe(-1);
  });

  it('should return index of first found match', () => {
    expect(indexOf(['a', 'b', 'c', 'b'], 'b')).toBe(1);
  });
});
