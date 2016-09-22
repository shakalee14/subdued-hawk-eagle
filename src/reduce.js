const reduce = (collection, iteratee, initialValue) => {
	let accumulator = initialValue

	for(const key in collection){
		if (accumulator === undefined) {
			accumulator = collection[key]
		} else {
			accumulator = iteratee(accumulator, collection[key], key, collection)
		}
	}

	return accumulator

}





export { reduce }