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

const nums = require('./nums');
console.log(bubbleSort(nums));
