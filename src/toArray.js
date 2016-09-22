const toArray = ( input ) => {
  if(!Array.isArray( input )){
    return []
  } if(typeof(input) === 'object' ){
    const newArray = []
    for(let key in input){
      newArray.push(input[key], key)
    }
    return newArray
  }

}

export { toArray }