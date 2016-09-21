const forEach = (collection, iteratee) => {
  for(let key in collection) {
    iteratee(collection[key], key, collection)   
  }
  return collection
}

export { forEach }