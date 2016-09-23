import { trimmer } from './trim'

export const trimEnd = (value, characters) => {

  const input = ( value || '' ).toString()
  const arg = characters || '\t\n '

  const tempString = trimmer(input, arg)
  let result = ''
  for( let index = tempString.length-1; index >= 0; index--){
    result += tempString[index]
  }
  return result
}

