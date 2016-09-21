import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { forEach } from '../src/forEach'

const identity = element => element

describe.only( 'forEach', () => {

    it( 'returns initial collection', () => {
      const input = [1,2,3]

      expect( forEach(input, a => a + 1 )).toEqual( input )
    });

    it( 'returns initial object', () => {
      const input = { a: 1, b: 2 }

      expect( forEach(input, a => a + 1 )).toEqual( input )
    });


    it( 'invokes the iteratee with element, index, and list for forEach element in the array', () => {
      const doer = () => {
        let result = []

        return {
          result,
          fn: ( element, index, list ) => {
            result.push( element + '-' + index + '-' + list[index] )
          }
        }
      }

      const testObj = doer()

      forEach( ['a','b','c'], testObj.fn )
      expect( testObj.result ).toEqual( [ 'a-0-a', 'b-1-b', 'c-2-c'] )

    })

})