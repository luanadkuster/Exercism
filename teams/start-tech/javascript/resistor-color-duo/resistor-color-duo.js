
const cores = {
  black: '0',
  brown: '1',
  red: '2',
  orange: '3',
  yellow: '4',
  green: '5',
  blue: '6',
  violet: '7',
  grey: '8',
  white: '9'
} 

export const decodedValue = (cor) => {
const colors = cores[cor[0]] + cores[cor[1]];
// const primeiraCor = cor[0] // opção com as posições do array (input) separadas
// const segundaCor = cor[1]
// const colors = cores[primeiraCor] + cores[segundaCor]
// return colors
return +colors
};
