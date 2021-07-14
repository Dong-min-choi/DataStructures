function linearSearch(x, array) {
  let i = 0;
  let n = array.length;
  while (i < n && x > array[i]) i++;
  if (x === array[i]) return i;
  return null;
}

let array = [1,2,3,4,5,6,7];
console.log(linearSearch(6,array));