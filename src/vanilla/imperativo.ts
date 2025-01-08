// imperativa
// explicamos paso a paso como se debe lograr el resultado
// bucles, condicionales, estructuras de control

const numeros = [3,4,6]


let suma = 0;
for(let i=0; i<numeros.length; i++){
    suma += numeros[i]
}

console.log(suma)


// declarativa
// Especificamos el resultado deseado, sin entrar en detalles de como lograrlo
// Funciones de orden superior

const suma2 = numeros.reduce( (acum,num) => acum+num,     0)
console.log(suma2)