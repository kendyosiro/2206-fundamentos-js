function comparaNumeros(a,b){
    if (a == b) return 0;

    if (a < b) return -1;

    if (a > b) return 1;
}

var lista = [1, 10, 20, 13, 0, -1, 79, 4.5, -6.1];

console.log(lista.sort(comparaNumeros));
console.log(lista.sort());