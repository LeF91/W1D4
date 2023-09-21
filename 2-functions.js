// 4 types of functions
// "Classic one": function declaration++
// function expression
// Arrow functions++
// generator functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

const students = [
	{
		name: "Alexandre",
	},
	{
		name: "Elena",
	},
	{
		name: "Fabien",
	},
	{
		name: "Maria",
	},
	{
		name: "Monika",
	},
	{
		name: "Roberta",
	},
	{
		name: "Raafat",
	},
	{
		name: "Romain",
	},
	{
		name: "Rony",
	},
	{
		name: "Victor",
	},
]

// Create a random age beween 18 and 99 for all of you !

for (const student of students) {
	const randomAge = Math.floor(Math.random() * 100 - 18) + 18
	student.age = randomAge
}
// console.log(students)

/**
 * Function syntax
 */
// Function declaration: Named function
function functionName(parameter1, param2) {
	/**
	 * What ever needs to be done
	 * Sometime we might actually want to check for bad inputs
	 * and respond with our own Error
	 */
}

function sayHelloToAStudent(student) {
	if (!student || !student.name) {
		throw Error("Please provide a valid student")
	}

	console.log(`Hello ${student.name}`)
}

sayHelloToAStudent(students[0])
console.log("1")
// sayHelloToAStudent()
console.log("2")
// sayHelloToAStudent({})
console.log("3")
// sayHelloToAStudent([])
console.log("4")
// sayHelloToAStudent("")
console.log("5")
// sayHelloToAStudent({ age: 20 })
sayHelloToAStudent({ name: "Bob" })

function product(a, b) {
	if (typeof a !== "number" && typeof b !== "number") {
		throw Error("Please do math with numbers")
	}

	return a * b
}

const multiplied = product(5, 12)
console.log(multiplied)
// product()
/**
 * Nested function execution
 */
const sum = (a, b) => a + b

const result = product(sum(3, 20), product(product(2, 5), sum(3, 1)))
console.log(result)

// function sum (a, b) {
// 	return a + b
// }

// const sum = (a, b) => {
// 	return a + b
// }

/**
 *
 */

function getUserInfos(userName = "No username", userAge = 20) {
	return {
		firstName: userName,
		age: userAge,
	}
}

const user = getUserInfos("bob", 25)
// const notAValidUser = getUserInfos(undefined, 41)
// console.log(notAValidUser)

/**
 * Average function receive an Array as argument
 * Loop over the Array, adding the total age
 * return the average to a precision of 2
 */
function average(myArray) {
	// if (myArray.length === 0)
	if (!myArray.length) {
		return null
	}

	return (sumOfArray(myArray) / myArray.length).toFixed(3)
	const avg = sumOfArray(myArray) / myArray.length

	return +avg.toFixed(3)
}

function sumOfArray(myArray) {
	if (!myArray.length) {
		return null
	}
	let total = 0
	for (const element of myArray) {
		total += element.age
	}
	return total
}

const averageAge = average(students)
console.log(averageAge)
// const averageAge = average(pets)
