const justAStringWithEt = "et rometo et papapaet et"

// const cleanupRegexp = /\w+/gi
const cleanupRegexp = new RegExp(/\bet\b/, "gi")

console.log(justAStringWithEt.match(cleanupRegexp))

const palindrome = "Am?o !r, Ro...4m,az"

//  'a' !== 'A'   true
//  '!' !== '!'   false
//  " "  !== " "  false

let cleanedUpPalindrome = ""

for (let i = 0; i < palindrome.length; i++) {
	if (palindrome[i].toUpperCase() !== palindrome[i].toLowerCase()) {
		cleanedUpPalindrome += palindrome[i].toUpperCase()
	}
}

console.log(cleanedUpPalindrome)
// let sentence = "well, hello, how are you?"
let cleanedUpPalindromeAsArray = cleanedUpPalindrome.split("")
// for (let i = cleanedUpPalindrome.length - 1; i >= 0; i--) {
// 	revesedPalindrome += cleanedUpPalindrome[i]
// }
console.log(cleanedUpPalindromeAsArray)
// cleanedUpPalindromeAsArray.toReversed()
console.log(cleanedUpPalindromeAsArray)
// if (revesedPalindrome === cleanedUpPalindrome) {
// 	console.log("It's a palindrome indeed")
// }
