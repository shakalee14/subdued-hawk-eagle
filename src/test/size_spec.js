import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { size } from '../src/size'

describe( 'size', () => {
  it( 'returns the size of an array', () => {
    expect( size([1,2,3])).toEqual(3)
  })

 it( 'returns the size of a string ', () => {
    expect( size('steve')).toEqual(5)
  })

 it( 'returns the size of an object ', () => {
    expect( size({a:1, b: 2, c:3})).toEqual(3)
  })
 it( 'returns 0 if the input is not a collection', () => {
    expect( size(null)).toEqual(0)
  })
 it( 'returns 0 if the collection is undefined ', () => {
    expect( size(undefined)).toEqual(0)
  })

})
