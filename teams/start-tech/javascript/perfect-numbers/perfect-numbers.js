export const classify = (numeroTestado) => {
    if (numeroTestado <= 0) {throw new Error ('Classification is only possible for natural numbers.')}

    
    let somaDosDivisiveis = 0 // soma começa em zero e vai acumulando os valores de n conforme n for divisor do numeroTestado
    for (let n = 1; n < numeroTestado; n++) {
        if (numeroTestado % n == 0) {somaDosDivisiveis += n}; //calcula o resto da divisão pelo número n e soma o número n caso a divisão por ele tenha resto zero
       
    };

    if (numeroTestado == somaDosDivisiveis && numeroTestado > 5) return 'perfect';
    if (numeroTestado < somaDosDivisiveis) return 'abundant';
    if (numeroTestado > somaDosDivisiveis || numeroTestado == 1) return 'deficient';

}; 