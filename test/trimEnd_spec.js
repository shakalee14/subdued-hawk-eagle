import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { trimEnd } from '../src/trimEnd'

describe( 'trimEnd', () => {  

  it('returns a string with all leading and trailing whitespace removed if character argument is undefined', () => {
    expect(trimEnd( ' SJ is great! ' )).toEqual( ' SJ is great!' )
  })

  it('returns a string with specified characters removed when character argument is defined', () => {
    expect(trimEnd( 'Shaka for president', 't' )).toEqual( 'Shaka for presiden' )
  })

  it('returns a trimmed string when given an array', () => {
    expect(trimEnd( [' Shaka for president '] )).toEqual( ' Shaka for president' )
  })

  it('when given object as input, converts object to a trimmed string ', () => {
    expect(trimEnd( { a: 1 } )).toEqual( '[object Object]' ) 
  })

  it('when given a boolean as input, converts boolean to a string', () => {
    expect(trimEnd( true )).toEqual( 'true' )
  })

  it('when given a number as input, converts number to a string', () => {
    expect( trimEnd( 9 )).toEqual( '9' )
  })

  it('returns an empty string when input is null', () => {
    expect( trimEnd( null )).toEqual( '' )
  })

  it('returns an empty string when input is undefined', () => {
    expect( trimEnd( undefined )).toEqual( '' )
  })
})



