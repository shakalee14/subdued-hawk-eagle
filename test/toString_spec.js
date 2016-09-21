import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { toString } from '../src/toString'

describe( 'toString', () => {

  it( 'toString converts an array of strings to one string', () => {
    expect( toString(['to', 'be', 'stringy'])).toEqual('to,be,stringy')
  })

  it( 'toString converts an array of numbers to a string', () => {
    expect( toString([1, 2, 3, 4])).toEqual('1,2,3,4')
  })

  it( 'toString returns an empty string when the input is undefined', () => {
    expect( toString(undefined)).toEqual('')
  })

  it( 'toString returns a string when the input is a boolean', () => {
    expect( toString(true)).toEqual('true')
  })

  it( 'toString returns an empty string when the input is null', () => {
    expect( toString(null)).toEqual('')
  })

  it( 'toString returns a string when the input is an object', () => {
    expect( toString({b:2})).toEqual('[object Object]')
  })

  it( 'toString returns a string when the input is an integer', () => {
    expect( toString(1)).toEqual('1')
  })

  it ( 'toString returns -0 when given -0', () => {
    expect( toString(-0)).toEqual(-0)
  })
 
})


