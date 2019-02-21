const {
  reduce,
  reduceImperative,
  reduceNative,
  reduceNaive,
} = require('../reduce');


[reduce, reduceImperative, reduceNative, reduceNaive].forEach((reduceFn) => {
  describe(reduceFn.name, () => {
    it('should reduce to a number', () => {
      expect(reduceFn([1, 2, 3], (prev, item) => prev + item, 0)).toBe(6);
    });

    it('should reduce to a string', () => {
      expect(reduceFn(
        ['a', 'b', 'c'],
        (prev, item) => ((prev) ? `${prev}-${item}` : item),
        '',
      )).toBe('a-b-c');
    });

    it('should reduce to an object', () => {
      const computeAgeStats = arr => reduceFn(
        arr,
        (prev, item) => ({
          min: (prev.min === undefined || item.age < prev.min) ? item.age : prev.min,
          max: (prev.max === undefined || item.age > prev.max) ? item.age : prev.max,
          avg: (prev.sum + item.age) / (prev.count + 1),
          count: prev.count + 1,
          sum: prev.sum + item.age,
        }),
        { min: undefined, max: undefined, avg: undefined, count: 0, sum: 0 },
      );

      expect(computeAgeStats([{ age: 40 }, { age: 44 }, { age: 6 }]))
        .toEqual({ min: 6, max: 44, avg: 30, count: 3, sum: 90 });
    });
  });
});
