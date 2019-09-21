const nums = [99999, 999, 99, 999999999, 9999999, 9999, 999999, 99999999, 9];

function bubbleSort(arr) {
  // flag if items were swapped in iteration
  let swapped;
  // do... while items were swapped
  do {
    // set flag to false
    swapped = false;
    // loop through array
    for (i = 0; i < arr.length; i++) {
      // assign left (current) and right (next) elements
      let l = arr[i];
      let r = arr[i + 1];
      // determine order
      if (l > r) {
        // swap left and right
        let t = arr[i];
        arr[i] = r;
        arr[i + 1] = t;
        // flag that items were swapped
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort(nums));
// [ 9, 99, 999, 9999, 99999, 999999, 9999999, 99999999, 999999999 ]
