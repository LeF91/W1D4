const fridge = ["Tomatoes", "eggs", "milk"]

// Adding something to the Array
fridge.push("Parmigiano")

console.log(fridge)

// Removing an element
/**
 * To add something at the beginning:
 * - unshift
 * To remove an element from the beginning
 * - shift
 */
const lastElement = fridge.pop()
// console.table({ lastElement, fridge })
fridge.splice(2, 0, "Lettuce", "Peanut Butter")
console.log(fridge)

for (let i = 0; i < fridge.length; i += 2) {
	const food = fridge[i]
	console.log(food)
}
// for of loop

for (const element of fridge) {
	console.log(element)
}
// for (const food of fridge) {
// 	console.log(food)
// }
const betterFridge = [
	{
		name: "Tomatoes",
		quantity: 5,
	},
	{
		name: "Eggs",
		quantity: 4,
	},
	{
		name: "Milk",
		quantity: 1,
	},
]

let total = 0
for (const food of betterFridge) {
	console.log(food.quantity)
	total += food.quantity
}
console.log(total)

// forEach

//  array.forEach((element) => {})
betterFridge.forEach((foodElement) => {
	console.log(foodElement.name)
})

// Nested Arrays

const matrix = [
	[-87, -12, -65],
	[-512, -12, -650],
	[-87, -12, -4],
]

// console.log(matrix[1][2])

for (let i = 0; i < matrix.length; i++) {
	// const row = matrix[i]
	for (let j = 0; j < matrix[i].length; j++) {
		const number = matrix[i][j]
	}
}
let maxNumber = -Infinity
for (const row of matrix) {
	// console.log(row)
	for (const number of row) {
		console.log(number)
		if (number > maxNumber) {
			maxNumber = number
		}
	}
}

console.log(maxNumber)

const flattenedArray = matrix.flat()
console.log(flattenedArray)

console.log(Math.max(...flattenedArray))
console.log(Math.min(...flattenedArray))
const arrayOfWords = ["dog", "parrot", "cat"]
console.log(...arrayOfWords)
console.log(...flattenedArray)
// const simpleArr = [100, 1, 2, 123, 10]

// simpleArr.sort()
// console.log(simpleArr)
