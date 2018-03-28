const generateArray = (arrayLength) => {
  let specialArray = [];
  for(let i = 0; i < arrayLength; i++) {
      let specialNum = Math.floor( (Math.random() * 500) );
    specialArray.push(specialNum);
  }
  return specialArray;
}

module.exports = generateArray;
