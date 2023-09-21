const myArrayOfNumbers = []
myArrayOfNumbers.push(2, 7, 21, 32)

let maxNumber = -Infinity

for (const number of myArrayOfNumbers) {
	if (number > maxNumber) {
		maxNumber = number
	}
}
console.log(maxNumber)

let sum = 0
for (const num of myArrayOfNumbers) {
	sum += num
}
console.log(sum)

let sumOfMultiples = 0

for (const num of myArrayOfNumbers) {
	if (num % 3 === 0) {
		sumOfMultiples += num
	}
}
console.log(sumOfMultiples)
