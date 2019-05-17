//JS function

function getDivision(base, divide) {
  return base / divide
}

console.log(getDivision(2, 10))

const arrayOfValue = [10, 20, 30, 40]

averageValue(arrayOfValue, getResult)

/* function averageValue(values, callback) {
  const result = values.reduce((a, b) => a + b, 0) / values.length
  callback(result)
}
*/
const averageValue = (values, callback) => {
  const result = values.reduce((a, b) => a + b, 0) / values.length
  callback(result)
}
function getResult(result) {
  console.log(`callback receive value ${result}`)
}
