// @ts-check



export function frontDoorResponse(blurb) {
  return blurb.charAt(0);
};


export function backDoorResponse(blurb) {
  const blurbS = blurb.trim(); //blurb sem espaços antes da primeira letra e depois da última
  return blurbS.charAt(blurbS.length - 1); //última letra do verso sem os possíveis espaços 
};


export function capitalize(word) {
  const letrasFinais = word.slice(1); //Pegar todas as letras a partir da segunda 
  const letraInicial = word.slice(0,1); // Pegar apenas a primeira letra
    
  return letraInicial.toUpperCase() + letrasFinais.toLowerCase(); //Primeira sempre maiúscula e demais letras sempre minúsculas
  
}


export function frontDoorPassword(responses) {
  return capitalize(responses); // roda qualquer tentativa de resposta na função capitalize
}


export function backDoorPassword(responses) {
  return capitalize(responses) + ", please"; // roda qualquer tentativa de resposta na função capitalize, acrescentando o ", please" no retorno
}
