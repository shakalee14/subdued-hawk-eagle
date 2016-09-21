const clamp = (...args) => {
   const { value, lowerBound, upperBound } = parseClampParams( args )
   if( Array.isArray(value) ) {
     return NaN
   } else if ( value === null || lowerBound === null || upperBound === null ) {
      return 0
    } else if ( typeof value === 'string' ) {
     return NaN
   } else if( typeof value === 'number' || 'boolean' ) {
      if( +value <= +lowerBound ) {
        return lowerBound
      } else if (+value >= +upperBound) {
        return upperBound
      } else {
        return +value
      }
   } 
   else {
      return NaN
   }
}

const parseClampParams = args => {
  for(let index = 0; index < args.length; index++ ) {
    if(args[index] === null) {
      return { value: null, lowerBound: null, upperBound: null }
    }
  } 
  if( args.length === 1 ) {
    return { value: args[0], lowerBound: args[0], upperBound: args[0] }
  } else if( args.length === 2 ) {
    return { value: args[0], lowerBound: args[0] < args[1] ? args[0] : args[1], upperBound: args[1] }
  } else {
    return { value: args[0], lowerBound: args[1], upperBound: args[2] }
  }
}


export { clamp }

