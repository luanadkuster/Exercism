
export class Triangle {
  sideA; 
  sideB; 
  sideC;
  
  constructor(...sides) {
    this.sideA = sides[0]
    this.sideB = sides[1]
    this.sideC = sides[2]
   
  }
  get ladosMaioresQueZero() {
     return (this.sideA > 0 && this.sideB > 0 && this.sideC > 0)
  }

  get inequidade() {
    
    const isBaseValidC = ((this.sideA + this.sideB) >= this.sideC)
    const isBaseValidA = ((this.sideB + this.sideC) >= this.sideA)
    const isBaseValidB = ((this.sideA + this.sideC) >= this.sideB)

    return isBaseValidA && isBaseValidB && isBaseValidC;
  }
  
  get valido() {
    return this.ladosMaioresQueZero && this.inequidade;
  }
 
  get todosOsLadosIguais() {
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }

  get doisLadosIguais() {
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
  }
  
  get ladosDiferentes() {
    return !this.doisLadosIguais
  }

  get isEquilateral() {
    return this.valido && this.todosOsLadosIguais;
  }

  get isIsosceles() {
    return this.valido && this.doisLadosIguais;
  }

  get isScalene() {
    return this.valido && this.ladosDiferentes
  }
}
