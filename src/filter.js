export const filter = (collection, iteratee) => {
  
  if( !Array.isArray(collection) || typeof collection !== 'object') {
    return undefined
  }

  let predicate
  if (Array.isArray(iteratee) && iteratee.length >= 2) {
    // treat first 2 elements as key & value for object property equality comparison
    iteratee = {
      [iteratee[0]]: iteratee[1]
    }
  }
  if (typeof iteratee === 'function') {
    predicate = iteratee
  }
  else if (typeof iteratee === 'string') {
    // treat iteratee as key for value truthiness check
    predicate = item => {
      return !!item[iteratee]
    }
  }
  else if (iteratee !== null && !Array.isArray(iteratee) && typeof iteratee === 'object') {
    // strict comparison of object properties
    predicate = item => {
      let matched = true
      for (let key in iteratee) {
        if (item[key] !== iteratee[key]) {
          matched = false
        }
      }
      return matched
    }
  } else {
    predicate = item =>(!!item)
  }

  const newCollection = []
  collection.forEach((item, index, array) => {
    if (predicate(item, index, array)) {
      newCollection.push(item)
    }
  })

  return newCollection
} 








