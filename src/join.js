const join = ( value, separator ) => {

  var newString = ''
  var newSeparator = separator

  if( value instanceof Array){
    if ( separator === undefined) {
      newSeparator = ','
    } 
      for( var index = 0; index < value.length-1; index++){
      newString += value[index] + newSeparator  
    }
    newString += value[index]
    //newString += value[index++]
    return newString
  }

  else if( value.constructor.toString().indexOf("String") > -1){

    for( var index = 0; index < value.length-1; index++){
      newString += value.charAt(index) + separator  
    }
    newString += value.charAt(index)
    return newString
  }

  else {
    return ''
  }
}


export { join }