import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { trimStart } from '../src/trimStart'

describe.only( 'trimStart', () => {  

  it('returns a string with all leading and trailing whitespace removed if character argument is undefined', () => {
    expect(trimStart( 'SJ is great! ' )).toEqual( 'SJ is great! ' )
  })

  it('returns a string with specified characters removed when character argument is defined', () => {
    expect(trimStart( 'Shaka for president', 'S' )).toEqual( 'haka for president' )
  })

  it('returns a trimmed string when given an array', () => {
    expect(trimStart( [' Shaka for president '] )).toEqual( 'Shaka for president ' )
  })

  it('when given object as input, converts object to a trimmed string ', () => {
    expect(trimStart( { a: 1 } )).toEqual( '[object Object]' ) 
  })

  it('when given a boolean as input, converts boolean to a string', () => {
    expect(trimStart( true )).toEqual( 'true' )
  })

  it('when given a number as input, converts number to a string', () => {
    expect( trimStart( 9 )).toEqual( '9' )
  })

  it('returns an empty string when input is null', () => {
    expect( trimStart( null )).toEqual( '' )
  })

  it('returns an empty string when input is undefined', () => {
    expect( trimStart( undefined )).toEqual( '' )
  })
})



