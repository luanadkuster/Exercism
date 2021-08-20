//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (anoAVerificar) => {
    const divisivelPor4 = anoAVerificar % 4 === 0; // divisível por 4
    const divisivelPor100 = anoAVerificar % 100 === 0; // divisível por 100
    const divisivelPor400 = anoAVerificar % 400 === 0; // divisível por 400
    const Bissexto = divisivelPor4 && !divisivelPor100 || divisivelPor400; // regras bissexto
    return Bissexto;
}