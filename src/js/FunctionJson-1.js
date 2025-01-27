import { readFileSync } from 'fs'

// NOTA: Cargar el fichero snorlax.json

const dataJson = readFileSync('../JsUpgrade/src/js/snorlax.json', 'utf8')
const data = JSON.parse(dataJson)

// 1. IIFE para mostrar habilidades (Revisar Tema 3.5 Pagina 6)

// Enunciado: Crea una función autoejecutable (IIFE) que recorra el
// array de habilidades (abilities) en el archivo JSON.
// Obtén los nombres de las habilidades y muéstralos en la consola como un array.

;(function () {
  const array = []
  for (let i = 0; i < data.abilities.length; i++) {
    array.push(data.abilities[i].ability.name)
    console.log(array)
  }
})()

// 2. Callback para mostrar nombres de juegos (Revisar Tema 3.5 Pagina 8)

// Enunciado: Escribe una función llamada getGameNames que reciba un callback.
// Esta función debe recorrer el array game_indices del archivo JSON,
// obtener los nombres de las versiones del juego y pasarlos al callback,
// que debe imprimirlos en la consola como un array.
const getGameNames = (callback) => {
  const array = []
  for (let i = 0; i < data.game_indices.length; i++) {
    array.push(data.game_indices[i].version.name)
  }
  callback(array)
}

const printGameNames = (array) => {
  console.log(array)
}

getGameNames(printGameNames)

// 3. Arrow Function para calcular la altura (Revisar Tema 3.5 Pagina 11)

// Enunciado: Crea una función flecha que reciba como parámetro
// la altura de Snorlax (en decímetros) y la convierta a metros.
// Muestra el resultado en la consola.
const altura = altura => altura * 0.1
const altura2 = altura => altura - 100

console.log('Altura en metros: ' + altura(data.height))

// 4. Arrow Functions y Callbacks para determinar si Snorlax es "alto" (Revisar Tema 3.5 Pagina 8 y 11)

// Enunciado: Crea una función flecha que reciba 2 parametros: la altura en decimetros y
// un callback que permita la conversion a metros.
// El objetivo es determinar si es "alto". Considera que Snorlax es alto si su altura es
// mayor o igual a 2 metros. La función debe retornar true si es alto
// y false en caso contrario. Muestra el resultado en la consola.
const esAlto = (altura, callback) => {
  if (callback(altura) >= 2) {
    return true
  } else {
    return false
  }
}

console.log(esAlto(data.height, altura))
console.log(esAlto(data.height, altura2))
// 5. HOF para filtrar objetos con rareza alta (Revisar Tema 3.5 Pagina 9)

// Enunciado: Escribe una función llamada getMoves que reciba un callback.
// Esta función debe recorrer el arreglo moves del archivo JSON y obtener
// los nombres de los movimientos. Pasa estos nombres al callback,
// que debe imprimirlos en la consola. Como ejemplo, muestra los primeros
// cinco movimientos.
const imprimir = moves => console.log(moves.slice(0, 5))

const getMoves = (callback) => {
  const array = []
  for (let i = 0; i < data.moves.length; i++) {
    array.push(data.moves[i].move.name)
  }
  callback(array)
}

getMoves(imprimir)

// 6. HOF que retorna una función para filtrar habilidades por visibilidad (Revisar Tema 3.5 Pagina 9)

// Enunciado: Crea una función de orden superior llamada createAbilityFilter.
// Esta función debe recibir un parámetro isHidden (un booleano) y
// retornar una nueva función que, al ejecutarse,
// recorra el array de habilidades (abilities) del archivo JSON y
// devuelva un array con los nombres de las habilidades que cumplan con el
// criterio de visibilidad (is_hidden).
function createAbilityFilter (isHidden) {
  return function cpollaVieja () {
    const arrayPolla = []
    for (let i = 0; i < data.abilities.length; i++) {
      if (isHidden === data.abilities[i].is_hidden) {
        arrayPolla.push(data.abilities[i].ability.name)
      }
    }
    return arrayPolla
  }
}
console.log(createAbilityFilter(true)())
