console.log("Hello World!")


console.log(224/1.5)


//function to add two numbers
console.log(add(1,2))
function add(a,b) {
    return a+b
}
console.log(add(2,2))


//variables
num = 9
console.log(num)


let x = 5
console.log(typeof x)
console.log(x, typeof x) // 5 number


let y
console.log(y, typeof y) // undefined undefined


let a = Number("123") // type conversion
console.log(typeof a) // number


let value = Number("123 hello")
console.log(value, typeof value) // NaN number
 //NaN - Not a Number (Illegal number), it simply means the number we entered is wrong


 let value2 = parseInt("123 hello") // parseInt will try to fetch the number if the starting char is a number, otherwise it will be NaN
console.log(value2, typeof value2) // 123 number

let m = 1
let n = 1
console.log(m == n)// compares just the numbers
console.log(m === n)// compares the numbers and types
let res = m == n
console.log(res) // true


// template literal: ${} and `` should be used while using template literal
let num1 = 3
let num2 = 5
let res1 = num1 + num2
console.log(`The sum of ${num1} and ${num2} is ${res1}`) // The sum of 3 and 5 is 8


//conditional statements
let a1 = 5
let a2 = 6
let a3 = 7

if(a1>a2 && a1>a3)
    console.log(a1)
else if(a2>a3)
    console.log(a2)
else
    console.log(a3)


//loops
let i = 1
while(i<=5){
    console.log("while loop")
    i++
}

for(i=1; i<=5; i++)
    console.log("for loop")

i=1

do{
    console.log("do-while loop")
    i++
}while(i<=5)
