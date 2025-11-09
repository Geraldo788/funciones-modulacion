/*Ejercicio 2:
Función con parámetros y retorno
• Diseña una función llamada calcularPromedio que reciba tres notas y retorne el
promedio final del estudiante.
• Si el promedio es mayor o igual a 3.0, muestra un mensaje indicando que aprobó;
de lo contrario, que reprobó.
• Aplica operadores lógicos y condicionales */

let nota1 = parseInt(prompt("Ingrese nota 1"));
let nota2 = parseInt(prompt("Ingrese nota 2"));
let nota3 = parseInt(prompt("Ingrese nota 3"));

function calcularPromedio (nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3 
}

let promedio = calcularPromedio(nota1,nota2,nota3)
console.log(`El promedio es de: ${promedio.toFixed(2)}`)

if (promedio>=3.0){
    console.log("Felicidades, APROBASTE")
} else {
    console.log("REPROBASTE")
}