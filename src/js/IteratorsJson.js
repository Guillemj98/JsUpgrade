// Importar el módulo readFileSync
console.log("El archivo se esta ejecutando");
import { readFileSync } from 'fs';


// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('../JsUpgrade/src/js/snorlax.json', 'utf8')

// Convertir JSON a Object
const data = JSON.parse(dataJson)

// Usa for...in para recorrer las propiedades del objeto principal
// y muestra su tipo de dato. Usa for...of para iterar sobre los índices de juegos
// (game_indices) y mostrar los nombres de las versiones.
for (const propiedades in data) {
  console.log(typeof (data[propiedades]))
}
for (const pr of data.game_indices) {
  console.log(pr.version.name)
};

// Obtén un array con los nombres de todas las habilidades (abilities) del Pokémon,
// añadiendo el prefijo "Ability: " a cada nombre. (Posible requisito: Map)
const array = data.abilities.map((element) => ('Ability: ' + element.ability.name))
console.log(array)

// Filtra los movimientos (moves) que se pueden aprender en el nivel inicial (level_learned_at: 0).
// Devuelve un array con los nombres de estos movimientos. (Posible requisito: Filter, Some, Map)
const moves = data.moves.filter((element) => element.version_group_details.some((element) => element.level_learned_at === 0))
console.log(moves.map((element) => element.move.name))

// Encuentra la habilidad que tenga is_hidden igual a true y devuelve su nombre.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.
// (Posible requisito: Find, Ternary Operator)
const ability = data.abilities.find((element)=> element.is_hidden ===true)
console.log(ability.ability.name)


// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)
const total = data.game_indices.reduce((acc)=> acc+1,0)
console.log(total)

// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)

data.held_items.forEach((element)=> console.log(`Item: ${element.item.name}, Versiones: ${element.version_details.map((element)=> element.version.name)}`))



// Verifica si todas las habilidades (abilities) no son ocultas (is_hidden).
// Además, verifica si al menos un movimiento tiene el método de aprendizaje "machine".
// (Posible requisito: every, some)

const abilities = data.abilities.every((element)=> element.is_hidden === false)
console.log(abilities)
const mov = data.moves.some((element)=> element.version_group_details.some((group) => group.move_learn_method.name=== 'machine'))
console.log(mov)

// Convierte el array de habilidades (abilities) en un objeto donde las claves
// sean los nombres de las habilidades y los valores indiquen si son ocultas (is_hidden).
// (Posible requisito: Object.fromEntries)
const obj = Object.fromEntries(data.abilities.map((element)=> [element.ability.name, element.is_hidden]))
console.log(obj)

// Crea una función autoejecutable que recorra los movimientos (moves)
// y retorne un array con objetos que contengan el nombre del movimiento
// y su primer método de aprendizaje (move_learn_method).
// (Posible requisito: Funcion autejecutable, map, )
const arrayObj = (()=> data.moves.map((element)=> ({name: element.move.name, method: element.version_group_details[0].move_learn_method.name})))()
console.log(arrayObj)
