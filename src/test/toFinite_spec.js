import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { toFinite } from '../src/toFinite'

describe( 'toFinite', () => {
  it('returns 0 if the input is an array', () => {
    expect(toFinite([1,1,1])).toEqual(0)
	})

  it('returns 0 if the input is an object', () => {
    expect(toFinite( { a:1 } )).toEqual(0)
	})

  it('returns an integer if the input is an integer', () => {
    expect(toFinite(3.2)).toEqual(3.2)
	})
  
  it('returns a converted integer when the input is a string', () => {
    expect(toFinite('1000')).toEqual(1000)
	})
})