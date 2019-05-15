// loop  conditionnal control statement

const items = ["first", "second", "third"]
const blankLine = () => console.log("\n")

console.log("[Use in operator]\n")
for (item in items) {
  console.log(items[item])
}

blankLine()

console.log("[Use normal iterator i variable until length]\n")
for (let i = 0; i < items.length; i++) {
  console.log(items[i])
}

blankLine()

console.log("[Use map functional]\n")
items.map(item => {
  console.log(item)
})
blankLine()

console.log("[use while loop]\n")
let i = 0
while (i < items.length) {
  console.log(items[i])
  i++
}
blankLine()
