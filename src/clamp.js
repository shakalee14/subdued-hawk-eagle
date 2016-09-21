const clamp = (...args) => {
   const { value, lowerBound, upperBound } = parseClampParams( args )
   if( Array.isArray(value) ) {
     return NaN
   }
   else if( (typeof value === 'number' || typeof value === 'boolean') && (typeof lowerBound === 'number' || typeof lowerBound === 'boolean') && (typeof upperBound === 'number' || typeof upperBound === 'boolean')) {
      value = Number(value)
      lowerBound = Number(lowerBound)
      upperBound = Number(upperBound)
      if( value <= lowerBound ) {
        return lowerBound
      } else if (value >= upperBound) {
        return upperBound
      } else {
        return value
      }
   } else {
      return NaN
   }
}

const parseClampParams = args => {
  if( args.length === 1 ) {
    return { value: args[0], lowerBound: args[0], upperBound: args[0] }
  } else if( args.length === 2 ) {
    return { value: args[0], lowerBound: args[0] < args[1] ? args[0] : args[1], upperBound: args[1] }
  } else {
    return { value: args[0], lowerBound: args[1], upperBound: args[2] }
  }
}


export { clamp }

