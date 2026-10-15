
const nome = "Gabriela Faria";
const idade = 17;
const curso = "Desenvolvimento de Sistemas";
const matriculado = "Sim";

let nota1 = 8;
let nota2 = 9;
let nota3 = 7;
let faltas = 4;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Matriculado:", matriculado);

let media = (nota1 + nota2 + nota3) / 3;

console.log("Media:", media);

let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperacao";
} else {
    situacao = "Reprovado";
}
console.log("Situacao:", situacao);

const totalAulas = 40;
let aulasFrequentadas = totalAulas - faltas;
let frequencia = (aulasFrequentadas / totalAulas) * 100;

console.log("Frequencia:", frequencia + "%");

if (frequencia >= 75) {
    console.log("Frequencia suficiente");
} else {
    console.log("Frequencia insuficiente");
}

if (media >= 7 && frequencia >= 75 && matriculado === "Sim") {
    console.log("Aprovado nos criterios finais");
} else {
    console.log("Nao aprovado nos criterios finais");
}
