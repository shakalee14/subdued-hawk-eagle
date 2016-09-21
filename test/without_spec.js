import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { without } from '../src/without'

describe( 'without', () => {
  it('returns an array of filtered values', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3])
  })

  it('returns an array of filtered strings', () => {
  	expect(without('string', 's')).toEqual([])
  })

  it('does not filter objects', () => {
  	expect(without([{a:1}, {b:1}], {a:1})).toEqual([{a:1}, {b:1}])
  })

 })