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

  it('should sort an array of two integers', () => {
    const newArray = [3, 1];
    insertionSort(newArray);

    assert.deepEqual(newArray, [1, 3]);
  })

  it('should sort an array of four integers', () => {
    const newArray = [22, 9, 40, 4];
    insertionSort(newArray);

    assert.deepEqual(newArray, [4, 9, 22, 40]);
  })

  it('should sort an array of positive and negative integers', () => {
    const newArray = [-40, -33, 6, 12, 88, -100]
    const sortedArray = insertionSort(newArray)

    assert.deepEqual(sortedArray, [-100, -40, -33, 6, 12, 88])
  })

  it('should sort letters alphabetically', () => {
    const newArray = ['s', 'z', 'a', 't', 'g']
    const sortedArray = insertionSort(newArray)

    assert.deepEqual(sortedArray, ['a', 'g', 's', 't', 'z'])
  })

  it('should sort an array of 5000 amount of integers', () => {
    const newArray = generateArray(5000);
    const sortedArray = insertionSort([...newArray])
    assert.deepEqual(sortedArray, newArray.sort((a,b) => a -b));
  })

  it('should sort an array of 10000 amount of integers', () => {
    const newArray = generateArray(10000);
    const sortedArray = insertionSort([...newArray])
    assert.deepEqual(sortedArray, newArray.sort((a,b) => a -b));
  })
})
