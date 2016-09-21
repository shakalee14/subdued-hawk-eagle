const size = ( collection ) => {
  var count = 0

  for(var key in collection){ 
    count++ }
  
  return count
}

export { size }