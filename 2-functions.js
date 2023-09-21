// 4 types of functions
// "Classic one": function declaration++
// function expression
// Arrow functions++
// generator functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

const students = [
	{
		name: "Agathe",
	},
	{
		name: "Angelica",
	},
	{
		name: "Conrad",
	},
	{
		name: "Jose",
	},
	{
		name: "Katia",
	},
	{
		name: "Leia",
	},
	{
		name: "Lily",
	},
	{
		name: "Nicolas",
	},
	{
		name: "Rudy",
	},
]

// Create a random age beween 18 and 100 for all of you !
students.forEach((student) => {
	student.age = Math.floor(Math.random * 82) + 18
})
/**
 * Function syntax
 */
// Function declaration: Named function
function functionName(parameter1, param2) {
	/**
	 * What ever needs to be done
	 */
}

const arrowSumFunction = (a, b) => {
	if (typeof a !== "number" || typeof b !== "number") {
		throw Error("Hey, please know how to use maths.")
	}
	return a + b
}

arrowSumFunction(5, 7)

function sum(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw Error("Hey, please know how to use maths.")
	}
	console.log("Arguments: ", arguments)
	console.log(a + b)
	// return "hi"
	return a + b
	console.log("I will not run")
}
const returnedValue = sum(5, 6)

console.log(sum(7, 9))
// const returnedValue = 'hi'
console.log(returnedValue)

const nestedFunctionExecutions = sum(sum(2, 5), sum(5, 6))
console.log(nestedFunctionExecutions)
// sum(7, sum(5,6))
// sum(7, 11)
// 18

function oddOrEven(number) {
	if (number % 2 === 0) {
		return "Even"
	}
	console.log("We have an odd number")
	return "Odd"
}

biggerSum(2, 5, 8, 43, 135, 14, 25, 865)
function biggerSum(...allTheArguments) {
	console.log(allTheArguments)
}

/**
 * {
 * 	firstName: name,
 *  age: age
 * }
 */

function getUserInfos(userName = "No username", userAge = 20) {
	return {
		firstName: userName,
		age: userAge,
	}
}

getUserInfos("John", 24)
console.log(getUserInfos("Alice"))
console.log(getUserInfos())

function getBiggestNumberAndPosition(array) {
	let index = 0
	let biggest = -Infinity

	for (let i = 0; i < array.length; i++) {
		const number = array[i]
		if (number > biggest) {
			console.log(biggest, number, i)
			biggest = number
			index = i
		}
	}

	// return [biggest, index]
	return {
		maximum: biggest,
		position: index,
	}
}
console.log(
	"Biggest and position: ",
	getBiggestNumberAndPosition([45, 76, 104, 12, 97])
)

sum("John", {})
