const drop = (array, number = 1) => {
	if( !Array.isArray(array) && typeof array !== 'string'){
		 return []
		}
	const newArray = []
		for(let index = number; index < array.length; index++){
			newArray.push(array[index])
		} 
			return newArray
}

export { drop }