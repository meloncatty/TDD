const chai = require('chai')
require('locus')
const expect = chai.expect
const assert = chai.assert
const quickSort = require('../lib/quickSort.js')
const generateArray = require('../lib/generateArray.js')

describe('quickSort', () => {
  it('should be a function', () => {
    assert.isFunction(quickSort)
  })

  it('should sort an array of two integers', () => {
    const newArray = [3, 1]
    const sortedArray = quickSort(newArray)

    assert.deepEqual(sortedArray, [1, 3])
  })

  it('should sort an array of four integers', () => {
    const newArray = [12, 6 ,8, 33]
    const sortedArray = quickSort(newArray)

    assert.deepEqual(sortedArray, [6, 8, 12, 33])
  })

  it('should sort an array of positive and negative integers', () => {
    const newArray = [-40, -33, 6, 12, 88, -100]
    const sortedArray = quickSort(newArray)

    assert.deepEqual(sortedArray, [-100, -40, -33, 6, 12, 88])
  })

  it('should sort letters alphabetically', () => {
    const newArray = ['s', 'z', 'a', 't', 'g']
    const sortedArray = quickSort(newArray)

    assert.deepEqual(sortedArray, ['a', 'g', 's', 't', 'z'])
  })

  it('should sort an array of 50000 integers', () => {
    const newArray = generateArray(50000)
    const sortedArray = quickSort([...newArray])

    assert.deepEqual(sortedArray, newArray.sort((a,b) => a - b))
  })

  it('should sort an array of 100000 integers', () => {
    const newArray = generateArray(100000)
    const sortedArray = quickSort([...newArray])

    assert.deepEqual(sortedArray, newArray.sort((a,b) => a - b))
  })
})
