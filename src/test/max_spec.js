import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { max } from '../src/max'

describe( 'max', () => {
  it( 'returns the maximum value in an array of numbers', () => {
    expect( max([1,2,3])).toEqual(3)
  })

  it( 'returns the maximum value in an array of strings', () => {
    expect( max(['to', 'be', 'stringy'])).toEqual('to')
  })

  it( 'max returns undefined when the input is undefined', () => {
    expect( max(undefined)).toEqual(undefined)
  })

  it( 'max returns undefined when the input is a boolean', () => {
    expect( max(true)).toEqual(undefined)
  })

  it( 'max returns undefined when the input is null', () => {
    expect( max(null)).toEqual(undefined)
  })

  it( 'max returns undefined when the input is an object', () => {
    expect( max({a:1, b:2})).toEqual(undefined)
  })

  it( 'max returns undefined when the input is a string', () => {
    expect( max('best team ever')).toEqual(undefined)
  })

  it( 'max returns undefined when the input is an integer', () => {
    expect( max(1)).toEqual(undefined)
  })

  it( 'max returns undefined when the input is a symbol', () => {
    expect( max(Symbol())).toEqual(undefined)
  })

})