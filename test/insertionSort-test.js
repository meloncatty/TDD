const chai = require('chai')
require('locus')
const expect = chai.expect
const assert = chai.assert
const insertionSort = require('../lib/insertionSort.js')
const generateArray = require('../lib/generateArray.js')

describe('insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should sort an array of two numbers', () => {
    const newArray = [3, 1];
    insertionSort(newArray);

    assert.deepEqual(newArray, [1, 3]);
  })

  it('should sort an array of four numbers', () => {
    const newArray = [22, 9, 40, 4];
    insertionSort(newArray);

    assert.deepEqual(newArray, [4, 9, 22, 40]);
  })

  it('should sort an array of n amount of numbers', () => {
    const newArray = generateArray(29230);
    const sortedArray = insertionSort([...newArray])
    assert.deepEqual(sortedArray, newArray.sort((a,b) => a -b));
  })
})
