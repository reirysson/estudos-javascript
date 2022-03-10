var lista = [10,1,5,9,8,12,15];

function comparaNumeros (a,b) {if(a==b) return 0; if (a<b) return -1; if (a>b) return 1;};

lista.sort(comparaNumeros);

console.log(lista);