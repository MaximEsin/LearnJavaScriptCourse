const array = [new Uint8Array([1, 2, 3]), new Uint8Array([4, 5, 6])];

function concat(arrays) {
  const totalLength = arrays.reduce((acc, array) => acc + array.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const array of arrays) {
    result.set(array, offset);
    offset += array.length;
  }
  return result;
}
