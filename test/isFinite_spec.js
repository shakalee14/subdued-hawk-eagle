import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { isFinite } from '../src/isFinite'

describe.only( 'isFinite', () => {

  it( 'returns true when the input is a finite integer', () => {
    expect( isFinite(5)).toEqual(true)
  })

  it( 'returns false when the input is a string', () => {
    expect( isFinite('best team ever')).toEqual(false)
  })
  
  it( 'return false input is an array', () => {
    expect( isFinite([1,2,3])).toEqual(false)
  })

  it( 'returns false when the input is undefined', () => {
    expect( isFinite(undefined)).toEqual(false)
  })

  it( 'returns false when the input is a boolean', () => {
    expect( isFinite(true)).toEqual(false)
  })

  it( 'returns false when the input is null', () => {
    expect( isFinite(null)).toEqual(false)
  })

  it( 'returns false when the input is an object', () => {
    expect( isFinite({a:1, b:2})).toEqual(false)
  })

  it( 'returns false when the input is infinity', () => {
    expect( isFinite(Infinity)).toEqual(false)
  })

  it( 'returns false when the input is negative inifinity', () => {
    expect( isFinite(-Infinity)).toEqual(false)
  })
})