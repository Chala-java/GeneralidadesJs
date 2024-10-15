// console.log("Hello World!!!") 
// console.log('Hello World!!!');


// prompt('Ingrese cualquier cosa')

/* Variables */

// var nombre = 'Jaime Zapata'
// console.log(nombre)
// var nombre = prompt('Ingrese el nombre de alguien: ')
// console.log(nombre)

/*  */

// var numeroUno = parseInt(prompt('Ingrese un numero: '))
// var numeroDos = parseInt(prompt('Ingrese un numero: '))
// console.log(numeroUno + numeroDos)

// console.log('2' + 2 + '2')
// console.log((2 + 2) + '2')
// console.log((2 + 2) - '2')
// console.log('2' + '2' - '2')

/* Tipos de datos */

// var variable = 23
// console.log(typeof (variable))
// var variable = '23'
// console.log(typeof (variable))
// var variable = true
// console.log(typeof (variable))
// var variable
// console.log(typeof (variable))
// var variable = null
// console.log(typeof (variable))


/* Condicionales */
if (5 > 5) {
    console.log('Esto es un un condicional simple')
} else if (5 < 5) {
    console.log('Este es el condicional anidado')
} else {
    console.log('Esto es un condicional compuesto')
}
let opcion = prompt('Seleccione la opción: 1 , 2, 3, 4')
switch (opcion) {
    case '1':
        console.log('Esta es la opción 1')
        break
    case 2:
        console.log('Esta es la opción 2')
        break
    case 3:
        console.log('Esta es la opción 3')
        break
    case 4:
        console.log('Esta es la opción 4')
        break
    default:
        console.log('No existe el caso')
        break
}

let edad = 18
let resultado = edad >= 18 ? true : false
console.log(resultado)