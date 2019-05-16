let success = false

var newObject = new Promise((resolve, reject) => {
  try {
    let result = 9999 / divider
    let divider = 9999
    resolve(result)
  } catch (error) {
    reject(error.message)
  }
})

newObject
  .then(result => console.log(`result is ${result}`))
  .catch(error => console.log(`error is ${error}`))
