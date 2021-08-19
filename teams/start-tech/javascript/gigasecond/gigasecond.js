//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (initialDate) => {
  var convertDate = initialDate.getTime(); //convertendo para milisegundos (forma que o JavaScript faz cálculo de datas)
  var finalDate = convertDate + 1e9 * 1000 //somando data em milisegundo com 1 gigasegundo (vezes 1000 para ficar em milisegundo)
  
    return new Date(finalDate); //voltando de milisegundos após o cálculo para formato de data
  
};
