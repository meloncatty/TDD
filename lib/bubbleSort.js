const bubbleSort = (a) => {
  for(let i = 0; i < a.length; i++) {
    for(let j = 1; j < a.length - i; j++) {
      if(a[j - 1] > a[j]) {
        [a[j-1], a[j]] = [a[j], a[j-1]]
      }
    }
  }
  return a;
}

module.exports = bubbleSort;
