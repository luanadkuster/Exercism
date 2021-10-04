// @ts-check


export function getCardPosition(stack, card) {
  var position = -1
  for(var i = 0; i < stack.length; i++){
    if (stack[i] == card) return position = i 
  };
  return position
};


export function doesStackIncludeCard(stack, card) {
  var position = false
  for(var i = 0; i < stack.length; i++){
    if (stack[i] == card) return position = true 
  };
  return position
};


export function isEachCardEven(stack) {
  let valorPorCarta = 0
  for(var i = 0; i < stack.length; i++){
    if (stack[i] % 2 == 0 ) valorPorCarta ++ 
  };
  return valorPorCarta == stack.length
};


export function doesStackIncludeOddCard(stack) {
  let resposta = false
  for(var i = 0; i < stack.length; i++){
    if (stack[i] % 2 != 0 ) return resposta = true 
  };
  return resposta
};


export function getFirstOddCard(stack) {
  for(var i = 0; i < stack.length; i++){
    if (stack[i] % 2 != 0 ) return stack[i] 
  };
};


export function getFirstEvenCardPosition(stack) {
  let position = -1
  for(var i = 0; i < stack.length; i++){
    if (stack[i] % 2 == 0 ) return position = i
  };
  return position
};
