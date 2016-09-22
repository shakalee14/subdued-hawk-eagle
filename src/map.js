const map = ( collection , iteratee ) => {
  if( ! isArrayObjectorString(collection)){
    return []
  }
  const newArray = []
  const fn = iteratee || ( a=> a)
  for(const key in collection) {
    newArray.push( fn(collection[key], key, collection))   
  }
 return newArray
}

const isArrayObjectorString = array => {
  return array !== null && (
    array instanceof Array || 
    typeof( array ) === 'object' || 
    typeof( array ) === 'string'
  )
}

export { map }