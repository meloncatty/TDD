const splitArray = (a) => {
  if(a.length <= 1) {
    return a;
  }

  let midIndex = Math.floor(a.length/2);
  let leftSide = a.slice(0, midIndex);
  let rightSide = a.slice(midIndex);
  let leftArray = mergeSort(leftSide);
  let rightArray = mergeSort(rightSide);

  return merge(leftArray, rightArray);
}

const mergeSort = (left, right) => {
  let sortedArray = [];
  
  while(left.length > 0 && right.length > 0) {
    if(left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
    return [...sortedArray, ...left, ...right];
}

module.exports = splitArray;
