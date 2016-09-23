import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isString } from '../src/isString'

describe( 'isString', () => {
  it( 'isString returns true when the input is a string', () => {
    expect( isString('best team ever')).toEqual(true)
  })
  
  it( 'return false input is an array', () => {
    expect( isString([1,2,3])).toEqual(false)
  })

  it( 'isString returns false when the input is undefined', () => {
    expect( isString(undefined)).toEqual(false)
  })

  it( 'isString returns false when the input is a boolean', () => {
    expect( isString(true)).toEqual(false)
  })

  it( 'isString returns false when the input is null', () => {
    expect( isString(null)).toEqual(false)
  })

  it( 'isString returns false when the input is an object', () => {
    expect( isString({a:1, b:2})).toEqual(false)
  })


  it( 'isString returns false when the input is an integer', () => {
    expect( isString(1)).toEqual(false)
  })

  it( 'isString returns false when the input is a symbol', () => {
    expect( isString(Symbol())).toEqual(false)
  })

})