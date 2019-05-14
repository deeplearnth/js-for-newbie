const PI = 3.141
const Radius = 10

// PI = 6.28
var result = 2 * PI * Radius
console.log(`result is ${result}`)

function powerByTwo() {
  var result = 10
  console.log(`In function result is ${result}`)
  return result ** 2
}

const resultPower = powerByTwo()
console.log(`result value is ${result}`)
console.log(`result of power function ${resultPower}`)

console.log(hoist)
var hoist
let hoist
