import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { drop } from '../src/drop'

describe( 'drop', () => {

	it('returns a slice of an array based on the number given in the second parameter', () => {
		expect(drop([1, 2, 3], 2)).toEqual([3])
	})

	it('returns a slice of an array without index zero if no number is given', () => {
		expect(drop([1, 2, 3])).toEqual([2, 3])
	})

	it('returns an empty array if the second parameter is greater than the length of the array', () => {
		expect(drop([1, 2, 3], 5)).toEqual([])
	})

	it('returns the input array if the second parameter is zero', () => {
		expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3])
	})

	it('returns an array based on the second parameter when the input parameter is a string', () => {
		expect(drop('abcd', 2)).toEqual(['c', 'd'])
	})

	it('returns an empty array when the input is an object', () => {
		expect(drop({a:1, b:2, c:3}, 2)).toEqual([])
	})
})