import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { toArray } from '../src/toArray'

describe( 'toArray', () => {
  it('returns an empty array when given an integer', () => {
    expect(toArray(2)).toEqual([])
  })

  it('returns an array of the keys of the input object', () => {
    expect(toArray({a:1, b:2})).toEqual([1,2])
  })

  it('returns an array of the characters of the input string', () => {
    expect(toArray('ana')).toEqual(['a', 'n', 'a'])
  })
  it('returns an empty array when the input is null', () => {
    expect(toArray(null)).toEqual([])
  })
})