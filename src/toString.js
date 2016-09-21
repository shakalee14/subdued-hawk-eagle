const toString = (value) => {
  if(value === undefined || value === null) {
    return ''
  }
  else if( value === -0) {
    return -0
  }
  else if (value instanceof Array) {
    return value.join()
  }
  else if( typeof value === 'object') {
    return '[object Object]'
  }
  else {
    let beginning = ''
    return beginning.concat(value) 
  }
}


export { toString } 