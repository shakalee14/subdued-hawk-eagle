const max = (collection) => {
  if(Array.isArray(collection) && collection.length > 0) {
      let maxValue = collection[0]
      for(let currentIndex = 1; currentIndex < collection.length; currentIndex++) {
        if(collection[currentIndex] > maxValue) {
          maxValue = collection[currentIndex]
        }
      }    
    return maxValue
  } else {
    return undefined
  }
}


export { max }