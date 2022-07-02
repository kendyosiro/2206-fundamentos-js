//tipo de dado
//booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";

//o === compara o valor e o tipo das variáveis
//no caso, o resultado é false
console.log(numero === numeroString);

//o == compara apenas o valor
//o javaScript converte o número em string implicitamente
//daí o resultado é true
//é propenso a dar bugs nos códigos
console.log(numero == numeroString);

//ao tentar somar os valores, concatena as strings
console.log(numero + numeroString);

//conversão explícita
//uma maneira de impedir que isso ocorra
//é fazer conversão explícita
//Number converte a string em número, permitindo a soma
//Number()
    console.log(numero + Number(numeroString));

//outra maneira é converter a variável em número
//const numeroString = Number("456");

//cuidado se você declarar a const com um caractere
//o que não permite a conversão
//dando o resultado NaN
const numero2 = "456a";

console.log(numero + Number(numero2)); //resultado NaN


//String()

