const chai = require('chai');
require('locus');
const expect = chai.expect;
const assert = chai.assert;
const bubbleSort = require('../lib/bubbleSort.js');
const generateArray = require('../lib/generateArray.js')

describe('bubbleSort', () => {
  it('should be a funciton', () => {
    assert.isFunction(bubbleSort);
  });

  it('should sort an array of two numbers', () => {
    const newArray = [3, 1];
    bubbleSort(newArray);
    assert.deepEqual(newArray, [1, 3]);
  });

  it('should sort an array of four numbers', () => {
    const newArray = [22, 9, 40, 4];
    bubbleSort(newArray);
    assert.deepEqual(newArray, [4, 9, 22, 40]);
  });

  it('should sort an array of n amount of numbers', () => {
    const newArray = generateArray(40);
    const sortedArray = bubbleSort([...newArray]);

    assert.deepEqual(sortedArray, newArray.sort((a,b) => a - b));
  })
})
