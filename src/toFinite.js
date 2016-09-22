const toFinite = (value) => {
	if( Array.isArray(value) || typeof value === 'object') {
		return 0
	}
	if( typeof value === 'string') {
		return parseInt(value)
	} else {
		return value
	}

}

export { toFinite }