const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(first, last){
  let modifiedfood = []
  for (let i = first; i < last - 1; i++) {
    modifiedfood.push(foods[i])
  }
  return modifiedfood
}

// Progression 2:

// for my reference
// Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];
// const foods = [pizza, burger, fingerShips, donuts, springRoll];
// function spliced(){
  
function spliced () {
  foods.splice(2, 0,"noodles", "icecream")
  return foods
}

// Progression 3:

function isEven(number) {
  if (number%2 == 0)
    return true
  else
    return false
}

function isPrime(number) {
  if (number == 2 || number == 3) return true
  else if (number <= 1) return false
  else{
    for (let i = 2; i < number; i++) {
      if (number%i == 0) return false
    }
  }
  return true
}

// for my reference 
// const numberArray = [12,324,213,4,2,3,45,4234];
 
function checkNumber (numberArray, operation) {
  let newarray = numberArray.filter(operation)
  return newarray
} 

// Progression 4:

function reject (numberArray) {
  let rejects = [] 
  numberArray.forEach((number) => {
    isPrime(number) ? null : rejects.push(number)
  })
  return rejects
}

function nonPrime(numberArray){
  return reject(numberArray)
}

// Progression 5:

let isEvenUsingLambda = (number) => number%2 == 0

// Progression 6:

function squaring (number) {
  return number *= number
}

function findSquareOfNumbers(myArray){
let mynewarray = myArray.map(squaring)
  return mynewarray 
}

// Progression 7:

function multiply (myArray) {
  let multiply = myArray.reduce((value, num) => {
    return value * num
  }, 1)
  return multiply
}

function sumOfSquares(myArray) {
  return myArray.map(squaring).reduce((value, num) => {
    return value + num
  }, 0)
}