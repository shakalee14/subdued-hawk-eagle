import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { map } from '../src/map'

const fn = a => a+a 
const testFunction = ( value, index, array) => `${value}-${index}-${array[index]}`

describe.only( 'map', () => {
  it('returns a new array of the result of the iteratee and the input string', () => {
    expect(map('shaka', fn )).toEqual(['ss', 'hh', 'aa', 'kk', 'aa'])
  })

  it('returns a new array of the result of the iteratee and the input array', () => {
    expect(map([2,3,4], fn )).toEqual([4, 6, 8])
  })

  it('returns the input array when the iteratee is undefined', () => {
    expect(map([2,3,4], undefined)).toEqual([2,3,4])
  })

  it('invokes the iteratee on an array with three arguments: array[index], index and array', () => {
    expect(map([2,3,4], testFunction)).toEqual(['2-0-2', '3-1-3', '4-2-4'])
  })

  it('returns an array of the keys of the input object when no iteratee is given', () => {
    expect(map({a:1, b:2, c:3})).toEqual([1,2,3])
  })

  it('invokes the iteratee on an object with three arguments: value, key, object', () => {
    expect(map({a:1, b:2, c:3}, testFunction)).toEqual(['1-a-1', '2-b-2', '3-c-3'])
  })
})