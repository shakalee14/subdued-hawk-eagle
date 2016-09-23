const trim = (value, characters) => {

	const input = ( value || '' ).toString()
	const arg = characters || '\t\n '

	return trimmer(trimmer(input, arg), arg)

}

const trimmer = ( input, characters ) => {
	let newString = ''
	let step = false

	for (let index = input.length - 1; index >= 0; index--) {
		let leaveCharacter = false

		for (let position = 0; position < characters.length && ! step; position++) {
			leaveCharacter = leaveCharacter || input[ index ] === characters[ position ]
		}

		if( ! leaveCharacter ) {

			step = true
			newString += input[ index ]
		}
	}

	return newString
}


export { trim, trimmer }

