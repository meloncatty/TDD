const quickSort = (a) => {
  if(a.length <= 1) {
    return a;
  }
  let pivot = a.pop();
  const lessThanPivot = [];
  const greaterThanPivot= [];

  for(let i = 0; i < a.length; i++) {
    if(a[i] < pivot) {
      lessThanPivot.push(a[i]);
    } else {
      greaterThanPivot.push(a[i]);
    }
  }
  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
}

module.exports = quickSort;
