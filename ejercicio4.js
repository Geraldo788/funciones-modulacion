/*Ejercicio 4 – Función con estructura modular 
• Crea un pequeño programa que calcule el valor total de una compra. • Debes usar al menos tres funciones: 
o Una función para calcular el subtotal (cantidad × precio). 
o Otra función para calcular el IVA (19%). 
o Una tercera función que retorne el total a pagar. 
• Usa retornos de valor y combina los resultados entre funciones.  */

import {
    calcularIva,
    calcularSubtotal,
    totalPagar,
} from './Modulos/barril.js'

let cantidad = parseInt(prompt("ingrese la cantidad de articulos"))
let precio = parseInt(prompt("Ingrese el precio del articulo"))

let subtotales = calcularSubtotal (cantidad, precio)
let valoriva = calcularIva (subtotales) 
let total = totalPagar (subtotales, valoriva) 

console.log(`Valor de IVA es: ${valoriva}`)
console.log(`Subtotal es: ${subtotales}`)
console.log(`Total es: ${total}`)


