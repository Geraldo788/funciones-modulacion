/* Ejercicio 3 – Función con ciclos 
• Crea una función llamada contarHasta que reciba un número y, utilizando un ciclo,  imprima todos los números desde 1 hasta el valor recibido. 
• Convierte luego esta función a función flecha. */

// function contarHasta (numero){
  
//     for (let i = 1; i<= numero; i++){
//         console.log(i) }

// }
//  contarHasta(5)

// --------------------------------------------------------------------------------------------

// Flecha:

const contarHasta = (numero) => {
        for (let i = 1; i <= numero; i++) {
        console.log(i)        
    }
    
}

contarHasta(10)