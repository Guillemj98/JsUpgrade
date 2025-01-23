// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('C:/Users/GuillermoMagroJaén/Desktop/JsUpgrade/src/js/snorlax.json', 'utf8')

// TO-DO - Convertir JSON a Object

const data = JSON.parse(dataJson)

// 1. Crea un nuevo objeto, denominado info, que tenga las claves abilities, game_indices,
// held_items, moves y stats. Asigna todos un array vacio
const info = {
  abilities: [],
  game_indices: [],
  held_items: [],
  moves: [],
  stats: []
}

// 2. Del JSON, imprime por pantalla las mismas claves que has utilizado
// al crear tu objeto info
console.log(Object.keys(data))
console.log(data.abilities, data.game_indices, data.held_items, data.moves, data.stats)

// 3. Agrega al array vacio de abilities el nombre de las habilidades contenidas en el JSON.
info.abilities.push(data.abilities[0].ability.name, data.abilities[1].ability.name, data.abilities[2].ability.name)
console.log(info.abilities)
// 3.1. Accede manualmente a los 3 nombres y haz un push al array vacio
// 3.2. Modifica el acceso manual para que ahora utilices un for para hacer push a los 3 nombres
for (let i = 0; i < data.abilities.length; i++) {
  info.abilities.push(data.abilities[i].ability.name)
}

// 4. Modifica el array abilities del objeto info para que ahora contenga
// tres subarrays, formados por el nombre y la URL
// Borra la propiedad abilties y vuelvela a crear dinamicamente
info.abilities = [
  [data.abilities[0].ability.name, data.abilities[0].ability.url],
  [data.abilities[1].ability.name, data.abilities[1].ability.url],
  [data.abilities[2].ability.name, data.abilities[2].ability.url]
]

// Esto seria otra manera de acceder y crear el array
console.log(Object.values(data.abilities[0].ability))
console.log(Object.values(data.abilities[1].ability))
console.log(Object.values(data.abilities[2].ability))

// Esto seria orta manera de hacerlo pero con un For.
for (let i = 0; i < data.abilities.length; i++) {
  info.abilities.push(data.abilities[i].ability.name)
}

delete info.abilities
console.log(Object.keys(info))
info.abilities = []
console.log(Object.keys(info))

// 5. Usa el operado spread (...) para agregar al array vacio de game_indices de info
// los datos contenidos en game_indices del json
info.game_indices = [...data.game_indices]
console.log(info.game_indices)

// 6. Modifica con un bucle cada una de las posiciones del array game_indices de info
// para que solo contena un objeto formado ppr game_index y name
console.log(info.game_indices)
for (let i = 0; i < info.game_indices.length; i++) {
  info.game_indices[i] = {
    game_index: info.game_indices[i].game_index,
    name: info.game_indices[i].version.name
  }
}
console.log(info.game_indices)
// 7. Dentro del JSON, accede a los nombres de los items de held_items.
// Crea un array con solo los nombres y unelos para crear una string separado por <->
// Guardalo dentro del info -> held_items, sobreescribiendo el array vacio
console.log(data.held_items[0].item.name)
console.log(data.held_items[1].item.name)
const array = []
for (let i = 0; i < data.held_items.length; i++) {
  array.push(data.held_items[i].item.name)
}
info.held_items = array.join('-')
console.log(info.held_items)

// 8. De la clave moves del JSON, crea un array que contenga todos los nombres
// de los movimientos. Tras ello ordenalos alfabeticamente y ingresa en el array vacio
// de moves dentro los primeros 10 movimientos

const array1 = []
for (let i = 0; i < data.moves.length; i++) {
  array1.push(data.moves[i].move.name)
}

array1.sort()
console.log(array1)
for (let i = 0; i < 10; i++) {
  info.moves.push(array1[i])
}
console.log(info.moves)

// 9. Crea un objeto compuesto de las claves hp, attack, defense,
// specialAttack, specialDefense y speed. Ingresa los valores que se indican en JSON
// referente a estos nombres. Tras ello ingresalo en info -> stats sustituyendo al array
// vacio

const stats = {
  hp: data.stats[0].base_stat,
  attack: data.stats[1].base_stat,
  defense: data.stats[2].base_stat,
  specialAttack: data.stats[3].base_stat,
  specialDefense: data.stats[4].base_stat,
  speed: data.stats[5].base_stat
}
console.log(stats)
info.stats = stats
// 10. Dentro de stats convierte el objeto en un array,
// aplanalo y elimina los strings El resultado te tiene que quedar
// los valores numericos de las stats

const objeto = []

for (let i = 0; i < data.stats.length; i++) {
  objeto.push(data.stats[i].base_stat)
}
console.log(objeto)

// Esto transforma el objeto en un array
info.stats = Object.entries(info.stats).flat()

// Esto seria la resolucion del ejercicio ya que te pone restricciones y tienes
// que hacerlo a partir del array aplanado
for (let i = 0; i < info.stats.length; i++) {
  if (typeof info.stats[i] !== 'string') {
    objeto.push(info.stats[i])
  }
}
