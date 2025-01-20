const ciudades = ['Madrid', 'Bruselas', 'Barcelona', 'Munich']
console.log(ciudades.length)

console.log(ciudades)
ciudades.unshift('Monaco')
ciudades.push('Lyon')
console.log(ciudades)

const paises = ['España', 'Francia', 'Alemania', 'Portugal']
const array = ciudades.concat(paises)
console.log(array)

// JSON.stringify() --> Esto convierte el objeto String (JSON)
// JSON.parse() --> Convierte la String (JSON) en objeto.
