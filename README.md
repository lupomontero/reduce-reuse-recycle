# Reduce, reuse, recycle

Este repo contiene los ejemplos usados en la charla _Reduce, reuse, recycle_
presentada en [LimaJS el 21 de febrero 2019](https://www.meetup.com/LimaJS/events/fqzsdqyzdbcc/).

Acá puedes ver también los [slides usados en la presentación](https://docs.google.com/presentation/d/e/2PACX-1vT5RkPmsnGUZ1A8KgwklCnQ3Vck21Ux6V2SNXPQWZLlLYO1a13TOL39c0o5P-JI7FUDZT-NjgKYfFde/pub?start=false&loop=false&delayms=3000).

***

Objetivo: implementar función `reduce(arr, fn, initialValue)` y usarla para
implementar `map`, `filter`, `forEach`, `join`, `includes`, `indexOf`,
`lastIndexOf`, `reverse`, ...

Reglas:

* Recursión en vez de iteración.
* No sentencias, solo expresiones.
* No re-asignación.
* Inmutabilidad.

`reduce` iterativo (sin tener en cuenta _reglas_):

```js
const reduce = (arr, fn, initialValue) => {
  let result = initialValue;
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i], i, arr);
  }
  return result;
};
```

`reduce` recursivo:

```js
const reduce = (arr, fn, initialValue) => {
  const recurse = (remaining, prev, idx) => (
    (!remaining.length)
      ? prev
      : recurse(remaining.slice(1), fn(prev, remaining[0], idx, arr), idx + 1)
  );

  return recurse(arr, initialValue, 0);
};
```

`map`:

```js
const map = (arr, fn) => reduce(
  arr,
  (prev, item, idx, arr) => [...prev, fn(item, idx, arr)],
  [],
);
```

`filter`:

```js
const filter = (arr, fn) => reduce(
  arr,
  (prev, item, idx, arr) => (
    !!fn(item, idx, arr)
      ? [...prev, item]
      : prev
  ),
  [],
);
```

`forEach`:

```js
const forEach = (arr, fn) => reduce(
  arr,
  (_, item, idx, arr) => {
    fn(item, idx, arr);
  },
  undefined,
);
```

`join`:

```js
const join = (arr, separator = ',') => reduce(
  arr,
  (prev, item) => (
    (prev)
      ? `${prev}${separator}${item}`
      : `${item}`
  ),
  '',
);
```

`includes`:

```js
const includes = (arr, value) => reduce(
  arr,
  (prev, item) => prev || item === value,
  false,
);
```

`indexOf`:

```js
const indexOf = (arr, value) => reduce(
  arr,
  (prev, item, idx) => (
    (prev === -1 && item === value)
      ? idx
      : prev
  ),
  -1,
);
```

`lastIndexOf`:

```js
const lastIndexOf = (arr, value) => reduce(
  arr,
  (prev, item, idx) => (
    (item === value)
      ? idx
      : prev
  ),
  -1,
);
```

`reverse`:

```js
const reverse = (arr) => reduce(
  arr,
  (prev, item) => [item, ...prev],
  [],
);
```
