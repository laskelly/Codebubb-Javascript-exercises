// Trying some of these - https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// Javascript exercise 1
// Write a JavaScript program to display the current day and time in the following format.  Go to the editor ====== Sample Output: Today is: Tuesday.==== Current time is: 10 PM: 30 : 38
function getTheDate() {
  const todayDate = new Date();
  const day = todayDate.getDay();
  const hours = todayDate.getHours();
  const minute = todayDate.getMinutes();
  const second = todayDate.getSeconds();

  console.log(`Today is: ${day}. Current time is: ${hours}AM:${minute}:${second}`)
}

getTheDate()

// Javascript exercise 2
// Write a JavaScript program to print the contents of the current window.  
const printContent = function () {
  return document.body.innerText;
}
console.log(printContent())

// Previous solution
// const printContent = document.body.innerText;
// console.log(printContent)

// Exercise 3
// Write a JavaScript program to get the current date.  Go to the editor : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function getTheCurrentDate() {
  const todayDate = new Date();
  const thisDay = todayDate.getDay();
  const thisMonth = todayDate.getMonth();
  const thisYear = todayDate.getFullYear();

  console.log(`${thisDay}-${thisMonth}-${thisYear}`)
}

getTheCurrentDate()

// Exercise 4
// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

function findArea(x, y, z) {
  return x * y * z
}

console.log(findArea(5, 6, 7))

// Exercise 5
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front

function rotateString(str) {
  // const strSplit = str.split('')
  // let newStr = strSplit;
  // for (let i = 0; i < strSplit.length; i++) {
  //   newStr = strSplit.pop();
  //   newStr = strSplit.push();
  // }
  return str.split('')
}

console.log(rotateString('w3resource'))

// Exercise 6
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

function getYear(num) {

  if (num === 1600 || num === 2000) {
    console.log(`${num} is a leap year`)
  } else if ((num % 4 === 0) && ((num % 100 === 0) && (num % 100 === 0))) {
    console.log(`${num} is not a leap year`)
  } else if ((num % 4 === 0)) {
    console.log(`${num} is a leap yeat`)
  } else {
    console.log(`This ${num} is not even divisible by 4`)
  }
}

console.log(getLeapYear(1800))

// Exercise 7
//  Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

// ====================================

// Exercise 8
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

function geneRandNum() {
  const callNum = prompt('Guess a Number')
  if (callNum > 0 && callNum < 10) {
    alert('Good work')
  } else {
    alert(
      ('Not matched')
    )
    prompt('Guess another number')
  }
}

// geneRandNum()

// Exercise 9
// Write a JavaScript program to calculate days left until next Christmas. 

// ====================
// Exercise 10
// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).


// Select global variables
const numFirst = document.querySelector('#num')
const numSecond = document.querySelector('#numItem')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const result = document.querySelector('.result')


// Functions for multiply and divide
function multiplyItems() {
  multiply.addEventListener('click', function (e) {
    e.preventDefault()
    const multiplyResult = numFirst.value * numSecond.value;
    console.log(multiplyResult)

    const newList = document.createElement('li')
    // result.innerText = `The result is ${multiplyResult}`
    newList.innerText = `The result is ${multiplyResult}`
    result.appendChild(newList)
    numFirst.value = '';
    numSecond.value = '';
  })
}
multiplyItems()

// Function divide items
function divideItems() {
  divide.addEventListener('click', function (e) {
    e.preventDefault()
    const divideResult = numFirst.value / numSecond.value;
    console.log(divideResult)

    const newList = document.createElement('li')
    // result.innerText = `The result is ${divideResult}`
    newList.innerText = `The result is ${divideResult}`
    result.appendChild(newList);
    numFirst.value = '';
    numSecond.value = '';
  })
}

divideItems()

// Exercise 11
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor

function convertToDegrees(cel, fahr) {
  const fahrenResult = cel * 1.8 + 32;
  console.log(fahrenResult, `F`)
  const celcuisResult = (fahr - 32) * 0.5556;
  console.log(Math.floor(celcuisResult), `C`)
}

convertToDegrees(20, 68)

// Exercise 12
// Write a javascript programme to get the website url

console.log(document.URL)

// Exercise 13
// Write a JavaScript exercise to create a variable using a user-defined name
let userName = '';
function getUserName() {
  const name = prompt('Enter your name')
  userName = name;
  console.log(userName)
}

// getUserName()

// Exercise 14
// Write a JavaScript exercise to get the extension of a filename.
function getExtension(str) {
  return str.slice(str.lastIndexOf('.'))
}

console.log(getExtension('book.pdf'))

// Exercise 15
// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. 

function returnDiff(num) {
  const subtract = num - 13;
  console.log(subtract)
  if (num > 13) {
    return subtract * 2
  }

}

console.log(returnDiff(20))

// Exercise 16
// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 

function computeTwoInt(a, b) {
  if (a === b) {
    return (a + b) * 3
  } else {
    return a + b
  }
}

console.log(computeTwoInt(4, 4))

// Exercise 17 
// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19. 

function computeAbsDiff(num) {
  if (num > 19) {
    return ((num - 19) * 3)
  } else {
    return num - 19
  }
}

console.log(computeAbsDiff(30))

// Exercise 18
// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function isNumtrue(x, y) {
  if (((x === 50) | (y === 50) | (x + y === 50))) {
    return true
  } else {
    return false
  }
}

console.log(isNumtrue(25, 2))

// Exercise 19
// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function isGivenInt(num) {
  if ((num > (20 / 100)) && (num < 400)) {
    return true
  } else {
    return false
  }
}

console.log(isGivenInt(300))

// Exercise 20
// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function isPosiOrNega(x, y) {
  if ((x < 0) | (y < 0)) {
    return true
  }
}

console.log(isPosiOrNega(2, -2))

// Execrise 21
// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string. 
function newPyStr(str) {
  if ((str[0] !== 'P') && (str[1] !== 'y')) {
    return "Py" + str
  } else {
    return str
  }
}

console.log(newPyStr('pdge'))

// Exercise 22
// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

function removeCharStr(str, num, endNum, ret) {
  return str.slice(num, endNum) + str.slice(ret)
}

console.log(removeCharStr('Marvelours', 0, 3, 4))

// Exercise 23
// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
function newFromGivenStr(str) {
  if (str.length < 2) {
    return 'The str must be greater than 1'
  }
  const newStrCreate = str.charAt(str.length - 1) + str[0]
  return newStrCreate;
}

console.log(newFromGivenStr('Ken'))

// Exercise 24
// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.  

function appendToStr(str) {
  const newAppendStr = str[0] + str + str[0]
  return newAppendStr;
}

console.log(appendToStr('Dhuur'))

// Exercise 25
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7. 
function isMultiple(num) {
  if (num < 0) {
    return 'Must be a postive interger'
  }
  if ((num % 3 === 0) || (num % 7 === 0)) {
    return 'Num is divisible by 3 or 7'
  } else {
    return 'Num is not divisible by 3 or 7'
  }
}

console.log(isMultiple(21))

// Exercise 26
// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. 

function createStr(str) {
  if (str.length < 3) {
    alert('Str must be 3 letters or more')
  } else {
    const append = str.substring(str.length - 3)
    // const append = str.substr(0, 3)
    return append + str + append
  }
}
console.log(createStr('Charity'))

// Exercise 27
// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
function startsJava(str) {
  const isJava = str.slice(0, 4)
  if (isJava === 'Java') {
    return 'You rock, you start with Java'
  } else {
    return false
  }
}

console.log(startsJava('Javascript'))

// Exercise 28
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

function isInRange(int1, int2) {
  if ((int1 >= 50) && (int2 <= 99)) {
    return true
  } else {
    return 'No, you are not in range'
  }
}

console.log(isInRange(49, 70))

// Exercise 29
// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.  
function isThreeInRange(a, b, c) {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
    return true
  } else {
    return false
  }
}

console.log(isThreeInRange(90, 40, 40))

// Exercise 30
// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one

function isScriptPresent(str) {
  const scriptStr = str.slice(4, 10)
  if (scriptStr === 'script') {
    return str.slice(0, 4) + str.slice(10)
  } else {
    return str
  }
}

console.log(isScriptPresent('MonescriptFavour'))