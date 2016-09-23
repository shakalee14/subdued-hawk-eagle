import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { countBy } from '../src/countBy'

describe( 'countBy', () => {
  it( 'returns the composed clustered object from the object and iteratee', () => {
    expect( countBy([6.1, 4.2, 6.3, 6.8], Math.floor())).toEqual({'4': 1, '6':3})
  })

  it( 'returns the composed clustered object from an array and iteratee', () => {
    expect( countBy({'a':4.3, 'b':2.2, 'c':3.1, 'd': 3.2}, Math.floor())).toEqual({2:1, 3:2, 4:1})
  })

  it( 'returns the composed clustered object from a string and iteratee', () => {
    expect( countBy('shaka', 'length')).toEqual({ '5' : 1 })
  })

  it( 'returns an empty object when the input is null', () => {
    expect( countBy(null, 'length')).toEqual({})
  })

  it( 'returns an empty object when the input is undefined', () => {
    expect( countBy(undefined, 'length')).toEqual({})
  })

  it( 'returns an empty object when the input is infinity', () => {
    expect( countBy(Infinity, 'length')).toEqual({})
  })

  it( 'returns an empty object when the input is does not match the iteratee', () => {
    expect( countBy(-1, 'length')).toEqual({})
  })

})