//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const letras = {
 'G':'C',
 'C':'G',
 'T':'A',
 'A':'U', 
}

export const toRna = (letra) => {
if (letra === "") {
return "" }

else {  
var element = letras[letra[0]]

for (let n = 1; n < letra.length; n++) {
  element = element + letras[letra[n]];
}

return element
};
 
};

