const once = fn => {
  let result = undefined
  let count = 0

  return ( ...args ) => {
    if( count === 0 ) {
      count = 1
      result = fn( ...args )
    }

    return result
  }
}

export { once }