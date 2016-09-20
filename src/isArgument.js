const isArgument = ( value ) => {
  if(value instanceof Array){
    return false 
  }
  else if(value === Boolean) {
    return false
  }
  else {
    return value instanceof Object
  }
}

export { isArgument }