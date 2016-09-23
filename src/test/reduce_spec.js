import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { reduce } from '../src/reduce'

const sum = (memo, value) => memo + value

describe( 'reduce', () => {  

  it('returns the accumulated value of iterating over each element of the array, starting with memo value', () => {
    expect(reduce([1,2,3], sum, 5)).toEqual(11)
  })

  it('returns the accumulated value of iterating over each element of the array, starting with collection[0]', () => {
    expect(reduce( [1,2,3], sum ) ).toEqual( 6 )
  })

  it('invokes iteratee with memo, value, index, array; when given array as input', () => {
  	const iteratee = (memo, value, index, array) => 
  		`${memo}-${value}-${index}-${array[index]}`

    expect(reduce(['a','b'], iteratee, '')).toEqual('-a-0-a-b-1-b')
  })

  it('invokes iteratee with memo, value, key, object; when given object as input', () => {
  	const iteratee = (memo, value, key, object) =>
  		`${memo}-${value}-${key}-${object[key]}`

  	expect(reduce({a:1, b:2}, iteratee, '')).toEqual('-1-a-1-2-b-2')
  })

  it('returns undefined when input is null', () => {
    expect(reduce(null)).toEqual(undefined)
  })

  it('returns undefined when the input is undefined', () => {
    expect(reduce(undefined)).toEqual(undefined)
  })

  it('returns undefined when the input is an integer', () => {
    expect(reduce(2)).toEqual(undefined)
  })

  it('returns undefined when the input is a boolean', () => {
    expect(reduce(false)).toEqual(undefined)
  })

})