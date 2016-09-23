export const inRange = (value, start, end) => {
	if(isNaN(value)){
		return false
	}
	

	if(end === undefined) {
		end = start
		start = value
	}
	if(start === end){

		return false
	}
	else {
		if(value >= start && value < end) {

			return true
		}

		else {

			return false
		}
	}

}