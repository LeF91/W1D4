// Literal Object

const ronysBottle = {
	capacity: 500,
	color: "lavishblue",
	name: "WATER",
	brand: "Bottle Up",
	amountOfWater: 500,
	availableColors: ["lavishblue", "yellow", "magenta"],
	price: 29.99,

	drink: function () {
		this.amountOfWater -= 100
		console.log("Glup glup")
	},
}

let key = "color"
console.log(ronysBottle.key)
console.log(ronysBottle[key])

// Add a "capColor" key to Rony's bottle

ronysBottle.capColor = "Yellow"
console.log(ronysBottle)

for (const color of ronysBottle.availableColors) {
	console.log(color)
}
console.log(`Water left: ${ronysBottle.amountOfWater}`)
ronysBottle.drink()
console.log(`Water left: ${ronysBottle.amountOfWater}`)
ronysBottle.drink()
console.log(`Water left: ${ronysBottle.amountOfWater}`)

const ownerOfIlliu = {
	firstName: "Florian",
	address: {
		city: "Paris",
		arrondissement: 20,
	},
	phone: "06765432145",
}

const cat = {
	name: "Illiu",
	colors: ["Black", "White"],
	owner: ownerOfIlliu,
}
console.log(cat.owner.address.arrondissement)

const aPetLover = {
	name: "Bob",
	age: 31,
	pets: [
		{
			name: "echo",
			age: 3.75,
		},
		{
			name: "toto",
			age: 5.5,
		},
		{
			name: "malo",
			age: 7.0372,
		},
		{
			name: "bibo",
			age: 8,
		},
		{
			name: "nero",
			age: 1,
		},
	],
}

// console.log(aPetLover.pets)
const arrayOfNames = []

for (const pet of aPetLover.pets) {
	console.log(`Current pet:`, pet)
	console.log(pet.name)
	arrayOfNames.push(pet.name)
}

console.log(arrayOfNames)

let total = 0

for (const pet of aPetLover.pets) {
	total += pet.age
}
console.log("total: ", total)
const averageAge = total / aPetLover.pets.length
console.log(averageAge.toFixed(2) * 1)
console.log(+averageAge.toFixed(2))
console.log(Number(averageAge.toFixed(2)))

/**
 * for - in loop
 */

for (const something in aPetLover) {
	// console.log(something)
	// console.log(aPetLover[something])
	console.log(
		`key: ${something}, is it an Array? ${Array.isArray(aPetLover[something])}`
	)
	if (Array.isArray(aPetLover[something])) {
		console.log("Do something on this array.")
	}
}

// Object keys
const ronysBottleKeys = Object.keys(ronysBottle)
console.log(ronysBottleKeys)
// Object values
const ronysBottleValue = Object.values(ronysBottle)
console.log(ronysBottleValue)
// Object entries

const ronysBottleEntries = Object.entries(ronysBottle)
console.log(ronysBottleEntries)
