import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { trim } from '../src/trim'

describe.only( 'trim', () => {  

  it('returns a string with all leading and trailing whitespace removed if character argument is undefined', () => {
    expect(trim( ' SJ is great! ' )).toEqual( 'SJ is great!' )
  })

  it('returns a string with specified characters removed when character argument is defined', () => {
    expect(trim( 'Shaka for president', 'S' )).toEqual( 'haka for president' )
  })

  it('returns a trimmed string when given an array', () => {
    expect(trim( [' Shaka for president '] )).toEqual( 'Shaka for president' )
  })

  it('when given object as input, converts object to a trimmed string ', () => {
    expect(trim( { a: 1 } )).toEqual( '[object Object]' ) 
  })

  it('when given a boolean as input, converts boolean to a string', () => {
    expect(trim( true )).toEqual( 'true' )
  })

  it('when given a number as input, converts number to a string', () => {
    expect( trim( 9 )).toEqual( '9' )
  })

  it('returns an empty string when input is null', () => {
    expect( trim( null )).toEqual( '' )
  })

  it('returns an empty string when input is undefined', () => {
    expect( trim( undefined )).toEqual( '' )
  })
})



