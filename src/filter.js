export const filter = (collection, iteratee) => {
  
  if( !Array.isArray(collection) || typeof collection !== 'object') {
    return undefined
  }

  let predicate
  if (Array.isArray(iteratee) && iteratee.length >= 2) {
    iteratee = {
      [iteratee[0]]: iteratee[1]
    }
  }
  if (typeof iteratee === 'function') {
    predicate = iteratee
  }
  else if (typeof iteratee === 'string') {
    predicate = item => {
      return !!item[iteratee]
    }
  }
  else if (iteratee !== null && !Array.isArray(iteratee) && typeof iteratee === 'object') {
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








