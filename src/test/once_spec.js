import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { once } from '../src/once'

const test = a => a

describe( 'once', () => {
  it( 'returns a function', () => {
    expect( typeof( once( test )) ).toEqual( 'function' )
  })

  it( 'only invokes the function once', () => {
    const testFunction = (() => {
      let thing = { count: 0 }
      let test = () => thing.count++

      return { thing, test }
    })()

    const fn = once( testFunction.test )
    fn()
    fn()
    fn()

    expect( testFunction.thing.count ).toEqual( 1 )
  })
})