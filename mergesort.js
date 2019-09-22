const nums = [99999, 999, 99, 999999999, 9999999, 9999, 999999, 99999999, 9];

function mergeSort(arr) {
  // return size 1 arrays
  if (arr.length < 2) return arr;
  // define middle, left right indices
  const middle = Math.floor(arr.length / 2);
  const left = arr.splice(0, middle);
  const right = arr;
  // merge and return
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // temp storage array
  const temp = [];
  // remove element from left/right and push to temp
  while (left.length && right.length) {
    if (left[0] < right[0]) temp.push(left.shift());
    else temp.push(right.shift());
  }
  // return temp + left + right
  return [...temp, ...left, ...right];
}

console.log(mergeSort(nums));
