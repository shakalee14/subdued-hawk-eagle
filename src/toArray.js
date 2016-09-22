const toArray = ( input ) => {
  if(Array.isArray( input )){
    return input
  }
  if( typeof(input) === 'object' || typeof(input) === 'string'){
    const newArray = []
    for(let key in input){
      newArray.push(input[key])
  }
    return newArray
  } else {
    return []
  }
}

export { toArray }