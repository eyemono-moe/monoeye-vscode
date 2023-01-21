const isObject = (x: unknown): x is object =>
  x !== null && (typeof x === "object" || typeof x === "function");

type NestedObject<V> = {
  [key in string | number | symbol]: V | NestedObject<V>;
};

export const flatten = <V>(
  obj: NestedObject<V>,
  parentKey?: string
): Record<string, V> =>
  Object.keys(obj).reduce((acc, k) => {
    const value = obj[k];
    const _key = parentKey ? `${parentKey}.${k}` : k;
    if (isObject(value)) {
      Object.assign(acc, flatten(value, _key));
    } else {
      acc[_key] = value;
    }
    return acc;
  }, {} as Record<string, V>);
