
export class ResistorColorTrio {
  constructor(color) {
    this.color = color;
   
  }
  get label() {
    var lista = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9 
  }
  return decodedValue(this.color,lista);
}

} 
export const decodedValue = (cor,lista) => {
if(lista[cor[0]] === undefined
  || lista[cor[1]] === undefined
  || lista[cor[2]] === undefined){
throw new Error("invalid color") 
};

const colors = '' + lista[cor[0]] + lista[cor[1]];
const quantidade = lista[cor[2]];
const valorFinal = +colors * 10**quantidade;

if (quantidade < 2)
return "Resistor value: " + valorFinal + " ohms";
else if(quantidade < 5)
return "Resistor value: " + valorFinal/1000 + " kiloohms";
else if (quantidade < 8)
return "Resistor value: " + valorFinal/1000000 + " megaohms";
else
return "Resistor value: " + valorFinal/1000000000 + " gigaohms";
};