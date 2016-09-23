import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { join } from '../src/join'

describe( 'join', () => {
  it('returns a string when the inputs are an array and a string', () => {
    expect(join(['a', 'b', 'c'], '~')).toEqual('a~b~c')
  })

  it('returns an empty string when the inputs are an object and a string', () => {
    expect(join({ a: 1 }, '~')).toEqual('')
  })

  it('returns a string when the inputs are an array and a string', () => {
    expect(join(['a', 'b', 'c'], '~')).toEqual('a~b~c')
  })

  it('returns a string when the inputs are an array and a integer', () => {
    expect(join(['a', 'b', 'c'], 1)).toEqual('a1b1c')
  })

  it('returns a string when the inputs are an array and null', () => {
    expect(join(['a', 'b', 'c'], null)).toEqual('anullbnullc')
  })

  it('returns a string when the inputs are an array and undefined', () => {
    expect(join(['a', 'b', 'c'], undefined)).toEqual('a,b,c')
  })

  it('returns a string when the inputs are a string and a string', () => {
    expect(join('abc', '-')).toEqual('a-b-c')
  })

  it('returns a string when the inputs are an boolean and a string', () => {
    expect(join(false, '')).toEqual('')
  })

})