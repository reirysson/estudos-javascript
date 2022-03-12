const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

// [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

console.log(`O aluno ${listaDeNotasEAlunos[0][0]}, teve a média de: ${listaDeNotasEAlunos[1][0]}`);