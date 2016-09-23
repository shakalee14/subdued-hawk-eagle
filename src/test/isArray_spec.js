import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isArray } from '../src/isArray'

describe( 'isArray', () => {
  it( 'return true input is an array', () => {
    expect( isArray([1,2,3])).toEqual(true)
  })

  it( 'isArray returns false when the input is undefined', () => {
    expect( isArray(undefined)).toEqual(false)
  })

  it( 'isArray returns false when the input is a boolean', () => {
    expect( isArray(true)).toEqual(false)
  })

  it( 'isArray returns false when the input is null', () => {
    expect( isArray(null)).toEqual(false)
  })

  it( 'isArray returns false when the input is an object', () => {
    expect( isArray({a:1, b:2})).toEqual(false)
  })

  it( 'isArray returns false when the input is a string', () => {
    expect( isArray('best team ever')).toEqual(false)
  })

  it( 'isArray returns false when the input is an integer', () => {
    expect( isArray(1)).toEqual(false)
  })

  it( 'isArray returns false when the input is a symbol', () => {
    expect( isArray(Symbol())).toEqual(false)
  })

})