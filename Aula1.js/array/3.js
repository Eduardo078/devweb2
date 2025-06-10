//Trabalhando com array e laçom de repetição do..while

const alunos = [
    {aluno: 'Henrique',nota: 8},
    {aluno: 'Ana Bela',nota: 10},
    {aluno: 'Fernandes',nota: 10},
    {aluno: 'Bianca',nota: 9}
]

let index = 0
let somaDasNotas = 0
let totalAlunos = alunos.length

//Utilizando laço de rep

do{
    somaDasNotas += alunos[index].nota
    index ++
} while(index < totalAlunos)

let media = somaDasNotas / totalAlunos

console.log(media)