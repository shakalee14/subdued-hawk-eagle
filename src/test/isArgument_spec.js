import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isArgument } from '../src/isArgument'

describe( 'isArgument', () => {
  it( 'returns true if the input is an object', () => {
    expect( isArgument({a:1})).toEqual(true)
  })

  it( 'returns false if the input is an array', () => {
    expect( isArgument([1,2,3])).toEqual(false)
  })

  it( 'returns false if the input is a boolean', () => {
    expect( isArgument(Boolean)).toEqual(false)
  })

  it( 'returns false if the input is a string', () => {
    expect( isArgument('string')).toEqual(false)
  })

  it( 'returns false if the input is an integer', () => {
    expect( isArgument(2)).toEqual(false)
  })

  it( 'returns false if the input is undefined', () => {
    expect( isArgument(undefined)).toEqual(false)
  })

  it( 'returns false if the input is null', () => {
    expect( isArgument(null)).toEqual(false)
  })

  it( 'returns false if the input is a symbol', () => {
    expect( isArgument(Symbol())).toEqual(false)
  })
})