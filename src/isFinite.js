export const isFinite = (input) => {
  if(!isNaN(input)) {
      if(typeof input === 'boolean' || input === null){
        return false
      }
      else if(input %1 !== 0){
        return false
      }
      else{ 
        return true
      }
      }
      else{
        return false
      }
}

