import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { inRange } from '../src/inRange'

describe( 'inRange', () => {
  it( 'returns a boolean for the input of a value, a lower range and upper range', () => {
    expect( inRange(5, 3, 10)).toEqual(true)
  })

  it( 'returns a boolean for the input of a value and an upper range', () => {
    expect( inRange(6, 3)).toEqual(false)
  }) 

  it( 'returns false if inputs are the same', () => {
    expect( inRange(5, 5)).toEqual(false)
  })

  it( 'returns false for an array', () => {
    expect( inRange([1, 2, 3])).toEqual(false)
  })

  it( 'returns false for an object', () => {
    expect( inRange({a:1, b:2})).toEqual(false)
  }) 

  it( 'returns false for one or less parameters', () => {
    expect( inRange()).toEqual(false)
  }) 

  it( 'returns false for undefined', () => {
    expect( inRange()).toEqual(false)
  })   

})