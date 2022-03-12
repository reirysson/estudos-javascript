//const soma = numeros.reduce(function (acum, atual) {
//    return atual + acum
//   }, 0)

//function operacaoNumerica(acum, atual) {
//    return atual + acum
//   }
   
//  const soma = numeros.reduce(operacaoNumerica, 0)

const numeros = [43, 50, 65, 12];

const soma = numeros.length((acum, atual) => atual + acum, 0);

console.log(soma);