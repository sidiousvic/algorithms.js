const nums = [0, 892, 6, 9999, 9536, 63, 7, 634, 7, 87, 976];

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < arr.length; i++) {
      let l = arr[i];
      let r = arr[i + 1];
      if (l > r) {
        let t = arr[i];
        arr[i] = r;
        arr[i + 1] = t;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

bubbleSort(nums);
// [0, 6, 7, 7, 63, 87, 634, 892, 976, 9536, 9999];
