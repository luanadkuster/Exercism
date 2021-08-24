

export class Squares {
  constructor(numero){
   this.numero = numero
  
    
  }

  get sumOfSquares() {
    let n = 0; //contador iniciando o loop de 0
    let soma = 0; //valor de onde parte a operação soma

  while (n <= this.numero){
    
    soma += n**2; // eleva ao quadrado todos os números até n separadamente e os soma

    n++;
  }
  return soma
  }

  get squareOfSum() {
    let n = 0
    var quadrado = 0

  while (n <= this.numero){
    quadrado += n; // realiza a soma de todos os n's para depois elevarmos ao quadrado, utilizou-se var no lugar do let para poder usar na operação fora das chaves depois

    n++;
  }
  var quadradoSoma = quadrado**2 // faz o quadrado da soma do loop anterior 
     return quadradoSoma
  }

  get difference() {
    var diferenca = this.squareOfSum - this.sumOfSquares
    return diferenca
  }
}
