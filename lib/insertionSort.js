const insertionSort = (a) => {
  for(let i = 1; i < a.length; i++) {
    for(let j = i; j > 0; j--) {
      if(a[j] < a[j-1]) {
        [a[j], a[j-1]] = [a[j-1], a[j]]
      } else {
        j = 0;
      }
    }
  }
  return a;
}

module.exports = insertionSort;
