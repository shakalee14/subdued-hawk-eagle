const chunk = (list, size=1) => {
	
	if( !Array.isArray(list) && typeof list !== 'string'){
	   return []
	}
  const arrays = []
	
  for(let i = 0; i < list.length; i+=size){

    const newChunk = []

    for(let j = 0; newChunk.length < size && i+j < list.length; j++){
       newChunk.push(list[i+j])

      }

    arrays.push( newChunk )
     
    }
  
  return arrays 

}

export { chunk }