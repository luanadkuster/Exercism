// @ts-check


export function totalBirdCount(birdsPerDay) {
  var soma = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    soma += birdsPerDay[i];
  };
  return soma;
};


export function birdsInWeek(birdsPerDay, week) {
   
  var soma = 0;
  for (let i = 0 + (7*(week-1)); i < 7*(week); i++) {
    soma += birdsPerDay[i];
  };
  return soma;
};


export function fixBirdCountLog(birdsPerDay) {

  for (let i = 0 ; i < birdsPerDay.length; i+=2) {
    
    birdsPerDay.splice(i, 1, (birdsPerDay[i]+1))
    
  };
  
  return birdsPerDay;
};

