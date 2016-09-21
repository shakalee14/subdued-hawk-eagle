export const clamp = (...args) => {
  const { value, lowerBound, upperBound } = parseClampParams( args )
  if ( value === null ) {
    return 0
  }
  if(typeof value === 'boolean') {
    return value
  }
  if( !isNaN(value)) {
    if( value >= upperBound ) {
      return upperBound
    }
    if (value <= lowerBound) {
      return lowerBound
    }
    return value
  } 
  return NaN
}

const parseClampParams = args => {
  const value = args[0]
  let lowerBound, upperBound
  if (args[2] === undefined) {
    // no 3rd arg; 2nd arg is upper bound
    upperBound = args[1]
  } else {
    lowerBound = args[1]
    upperBound = args[2]
  }
  return {
    value: typeof value === 'boolean' ? value : +value,
    lowerBound: isNaN(lowerBound) ? +value : +lowerBound,
    upperBound: isNaN(upperBound) ? 0 : +upperBound,
  }
}

