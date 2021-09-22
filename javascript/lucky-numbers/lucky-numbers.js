// @ts-check



export function twoSum(array1, array2) {
  let soma = +array1.join('') + +array2.join('')
  return soma 
};


export function luckyNumber(value) {
  let valueString = String(value) 
  let valueArray = valueString.split('')
  return valueArray.join() === valueArray.reverse().join()
 
};


export function errorMessage(input) {
  let entrada = Number(input);
  if (input === '' || input === null || input === undefined) return 'Required field';
  if (!entrada) return 'Must be a number besides 0';
  else return ''
}