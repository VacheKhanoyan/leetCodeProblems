function pivotArray(nums, pivot) {
  const less = [];
  const equal = [];
  const greater = [];

  for (let num of nums) {
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greater.push(num);
    }
  }

  return less.concat(equal, greater);
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
