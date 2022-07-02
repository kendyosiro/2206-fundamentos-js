//tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumbero = 2;

const operacaoMatematica = primeiroNumero / segundoNumbero;

console.log(operacaoMatematica);

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

//NaN -> Not a Number (não é um número)
const alura = "Alura";

console.log(alura * primeiroNumero);

var a = 10;
var b = 0;
console.log(a/b);
var c = 0;
console.log(b/c);

function ganhoPorHora(salario, horasTrabalhadasNoMes)
{
    const salarioHora = (salario / horasTrabalhadasNoMes);

    //return Math.round(salarioHora);

    //return salarioHora.toFixed(2);

    return salarioHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

}

console.log(ganhoPorHora(3000,176));
