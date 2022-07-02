const usuarioLogado = true;
const contapaga = false;

//truthy ou falsy
//alguns elementos se comportam como booleanos: ex. 0 1

//0 => false
//1 => true
// strings vazias = false

console.log(0 == false);
console.log("" == false);
console.log(1 == true);


//null => tipo de dado que representa nada
let minhaVar; // recebe valor undefined
let varNull = null;

console.log(minhaVar);
console.log(varNull);
//undefined

let numero = 3;
let texto = 'Alura';


console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);

//aqui, apesar de ter sido inicializado como null, o javaScript  entende como object
//esse é um dos bugs que o javaScript têm e que não pretendem consertá-lo
console.log(typeof varNull); 