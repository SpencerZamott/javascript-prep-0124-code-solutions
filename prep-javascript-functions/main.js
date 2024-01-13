function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(2,2)
console.log('addTwoNumbers Result', sum)

function convertHoursToMinutes (hours){
const result = hours * 60;
return result
}

const minutes = convertHoursToMinutes(2)
console.log('minutes', minutes)

function getGreeting(name){
  const result = "Hello,"+ name+ "!"
  return result
}

const greeting= getGreeting("World")
console.log('Greeting:', greeting)

function addMultiplyBy5 (num1, num2){
  const result = (num1+num2)*5
  return result
}

const product = addMultiplyBy5(5,10)
console.log("addMultiplyBy5 Result:", product)

function multiplyAndDivideBy5 (num1, num2){
  const result = (num1*num2)/5;
  return result
}

const quotient= multiplyAndDivideBy5(35,10)
console.log("multiplyAndDivideBy5 Result:", quotient)

function subtractTwoNumbers(num1,num2){
  const result= num1 - num2
  return result
}

const diffrence= subtractTwoNumbers(22,7)
console.log("subtractTwoNumbers Result", diffrence)

function getCircleCircumfrance(radius){
  const result = (radius* Math.PI)*2
  return result
}

const answer= getCircleCircumfrance(5)
console.log("getCircleCircumfrance Result", answer)

function getFullName(firstName,lastName){
  const result= firstName + " "+ lastName
  return result
}

const fullName= getFullName("Spencer","Zamott")
console.log("My full name is ", fullName)

function cube(number){
  const result = number*25
  return result
}

const output= cube(5)
console.log("result of number cubed:", output)
