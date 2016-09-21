import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { clamp } from '../src/clamp'

describe.only( 'clamp', () => {
  it( 'returns a number equal to an upper bound argument when the input is larger the upper bound', () => {
    expect( clamp(10, 5)).toEqual(5)
  })

  it( 'returns the number given when the input is less than or equal to the upper bound', () => {
    expect( clamp(-5, 5)).toEqual(-5)
  })

  it( 'returns a number equal to the lower bound argument when input is less than lower bound', () => {
    expect( clamp(-5, 0, 5)).toEqual(0)
  })

  it( 'returns the number given when input is within or equal to the lower bound or upper bound arguments', () => {
    expect( clamp(2, 0, 5)).toEqual(2)
  })

  it( 'return NaN if input is an array', () => {
    expect( clamp([1,2,3])).toEqual(NaN)
  })

  it( 'returns NaN when the input is undefined', () => {
    expect( (undefined)).toEqual(NaN)
  })

  it( 'returns 0 or 1 when the input is a boolean', () => {
    expect( (true)).toEqual(1)
  })

  it( 'returns 0 when the input is null', () => {
    expect( (null)).toEqual(0)
  })

  it( 'returns NaN when the input is an object', () => {
    expect( ({a:1, b:2})).toEqual(NaN)
  })

  it( 'returns NaN when the input is a string', () => {
    expect( ('best team ever')).toEqual(NaN)
  })

})