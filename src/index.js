const arrayOfName = ["abacus", "banish", "campus", "deenee"]
const arrayOfNumber = [85, 15, 44, 98, 125]

console.log(arrayOfName.find(item => item === "deenee"))
console.log(arrayOfName.filter(item => item !== "banish"))
console.log(arrayOfName.filter(item => item > "abacus"))

console.log(arrayOfNumber.find(item => item > 20))
console.log(arrayOfNumber.filter(item => item > 20))

// Sum of all value in array
console.log(
  arrayOfNumber.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
)
