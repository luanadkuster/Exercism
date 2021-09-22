// @ts-check


export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy': var time = 0.5
    break;
    
    case 'Energizer': var time = 1.5
    break;
    
    case 'Green Garden': var time = 1.5
    break;

    case 'Tropical Island': var time = 3
    break;

    case 'All or Nothing': var time = 5
    break;

    default: time = 2.5
  };
  return time 
};


export function limesToCut(wedgesNeeded, limes) {
  let soma = 0
  let lime = 0
  for (let i = 0; soma < wedgesNeeded && i < limes.length; i++) {
    
  if (limes[i] === 'small') soma += 6;
  if (limes[i] === 'medium') soma += 8; 
  if (limes[i] === 'large')  soma += 10;
  
  lime ++   
};
return lime
};
   

export function remainingOrders(timeLeft, orders) {
  let tempo = 0
  do {
    
   tempo += timeToMixJuice(orders[0])
   orders.shift()

  } while (timeLeft - tempo > 0)
  return orders;
};
