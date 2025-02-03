// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
const dataJson = readFileSync('../JsUpgrade/src/js/cherry.json', 'utf8')

// Convertir JSON a Object
const data = JSON.parse(dataJson)



// Ejercicio 1:
//Para este ejercicio, vas a implementar una función arrow que manipule una URL dada
// siguiendo estos pasos:
// 1. Recibirá una URL como parámetro. Esta URL corresponderá a un recurso obtenido
// desde el objeto json cuando se llame a la función.
// 2. Separa la URL en función del carácter “/”, generando un array con cada uno de los
// segmentos que la componen.
// 3. Convierte todos los elementos del array generado anteriormente a mayúsculas.
// 4. La función debe devolver el array resultante
// Tras realizar la función, llámala utilizando una propiedad del objeto JSON que contenga una
// URL
console.log("Ejercicio 1 -------------------------------")

const arrow = (url) => {
    const array = url.split('/')
    return array.map((element)=> element.toUpperCase())
}
console.log(arrow(data.flavors[0].flavor.url))



// // Para este ejercicio, tu tarea es crear una función expresiva anónima en JavaScript que siga
// // estos pasos:
// // 1. Recibe un parámetro que será el objeto general JSON cargado.
// // 2. Convierte todos los valores del objeto en un array.
// // 3. Filtra aquellos valores que sean de tipo objeto y que además la propiedad .url no
// // sea undefined
// // 4. Devuelve el array con los objetos filtrados.
// // 5. Itera sobre el array filtrado y extraer las URLs, devolviendo un array con las URLs
// // obtenidas
console.log("Ejercicio 2 -------------------------------")

const expresiva = function(objeto){
    const array = Object.values(objeto)
    const array1 = array.filter((element)=> typeof element === "object" && element.url !== undefined)
    const array2 = array1.map((element)=> element.url)
    return array2
}
console.log(expresiva(data))
// // Para este ejercicio, tu tarea es crear una función autoejecutable (IIFE) que:
// // 1. Reciba por parámetro el array flavors.
// // 2. Determine si alguno de los elementos del array tiene una potency distinta de 0 y lo
// // muestre por consola.
// // 3. Calcule la suma total de todas las potencias de los elementos del array y la
// // muestre por consola.

console.log("Ejericicio 3------------------------------")
;(function(flavors){
    const array = flavors.filter((element)=> element.potency !== 0)
    console.log(array)
    const suma = flavors.reduce((acc, element)=> acc + element.potency, 0)
    console.log(suma)

})(data.flavors)




// // Para este ejercicio, tu tarea es crear una función arrow llamda filtrarNúmeros en JavaScript
// // que:
// // 1. Reciba el objeto data como parámetro.
// // 2. Convierta el objeto en un array de pares [clave, valor].
// // 3. Filtre solo aquellos elementos cuyo valor sea de tipo Number.
// // 4. Convierta el array filtrado nuevamente a un objeto.
// // 5. Recorra el objeto final y muestre por consola cada clave y su valor.
console.log("Ejericicio 4------------------------------")

const filtrarNumeros = (data) => {
    const array = Object.entries(data)
    const array1 = array.filter((element)=> typeof element[1] === 'number')
    const objeto = Object.fromEntries(array1)
    console.log(objeto)
}
filtrarNumeros(data)



// // Para este ejercicio, tu tarea es crear una función declarativa llamada procesarFlavors que:
// // 1. Reciba el array flavors como parámetro.
// // 2. Extraiga los nombres de los sabores y los guarde en un nuevo array.
// // 3. Ordene alfabéticamente los nombres.
// // 4. Una los nombres ordenados utilizando "->" como separador.
// // 5. Devuelva la String resultante y la muestre por terminal.
console.log("Ejericicio 5------------------------------")
function procesarFlavors(data){
    const array = data.map((element)=> element.flavor.name).sort().join("->")
    
    console.log(array)
    
}

procesarFlavors(data.flavors)


// // Para este ejercicio, tu tarea es crear una función arrow llamada contarVocales que:
// // 1. Reciba como parámetro el array con las claves del objeto JSON.
// // 2. Separa cada clave en letras individuales.
// // 3. Aplana el array resultante en una única lista de caracteres.
// // 4. Cuente cuántas vocales (a, e, i, o, u) hay en el array final.
// // 5. Muestre el número total de vocales por terminal.
console.log("Ejericicio 6------------------------------")

const contarVocales = (array) => {
    const array1 = array.map((element)=> element.split('')).flat()
    const array2 = array1.filter((element)=> element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u')
    console.log(array2.length)
}
contarVocales(Object.keys(data))



