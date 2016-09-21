import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { chunk } from '../src/chunk'

describe( 'chunk', () => {
  it('returns a new array based on the input array based on the size of the second parameter', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c','d']])
  })

  it('returns the input array of objects', () => {
  	expect(chunk([{a:1, b:2}, {a:1, b:2, c:4}], 1)).toEqual([[{a:1, b:2}], [{a:1, b:2, c:4}]])
  })

  it('returns the input array when no size parameter is given', () => {
  	expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'],['d']])
  })

  it('returns an empty array when there is no input array', () => {
  	expect(chunk({a:1, b:2, c:3}, 2)).toEqual([])
  })

  it('returns an array based on the size of the second parameter when the input is a string', () => {
  	expect(chunk('shaka', 2)).toEqual([['s', 'h'], ['a', 'k'], ['a']])
  })

  it('returns old test using 1 as the size', () => {
  	expect(chunk([1,2,3,4,5], 1)).toEqual([[1], [2], [3], [4], [5]])
  })

})