import { trimmer } from './trim'

export const trimStart = (value, characters) => {

  const input = ( value || '' ).toString()
  const arg = characters || '\t\n '

  let result = ''
  for( let index = input.length-1; index >= 0; index--){
    result += input[index]
  }
  return trimmer( result, arg )
}
