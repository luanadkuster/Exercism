// @ts-check

export function translate2d(dx, dy) {
  return (x,y) => [x+dx, y+dy]
}


export function scale2d(sx, sy) {
  return (x,y) => [x*sx, y*sy]
}


export function composeTransform(f, g) {
  return function (x, y) {
    var[x1, y1] = f(x, y);
    return g(x1, y1)
  }
}


export function memoizeTransform(f) {
  var x1, y1 // para iniciar com undefined
  var resultadoAntigo
  
  return function(x,y){
    if(x===x1 && y===y1){
    return resultadoAntigo
    };
    x1 = x;
    y1 = y;
    resultadoAntigo = f(x,y)
    return resultadoAntigo
  };
};
