const alunos = ['Manel', 'Davi', 'Reirysson', 'Lucas'];
const mediaDosAlunos = [10, 7, 9, 6];

//includes --> booleano
//indexOf --> número

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ' a média foi de: ' + listaDeNotasEAlunos[1][indice];
    } else {
        return "Esse aluno não etá aqui!";
    }
}

console.log(exibeNomeNota("Reirysson"));
