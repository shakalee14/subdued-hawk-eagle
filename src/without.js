const without = (collection, ...values) => {
  if( !Array.isArray(collection) ){
    return []
  } 

  const newArray = []

  for(let index = 0; index < collection.length; index++){ 
    let found = false

    for(let jindex = 0; jindex < values.length; jindex++) {
      found = found || collection[ index ] === values[ jindex ]
    }   

    if( ! found ) {
      newArray.push(collection[index]) 
    }
  }

  return newArray
}



export { without }