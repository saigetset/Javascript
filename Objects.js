//there are 3 ways to create objects in JS
//#1
let book = {"title":"Siddhartha","author":"Herman Hesse","year":"1998"}
console.log(book.author)
console.log(book["author"])

//#2
let book2 = new Object()
book2.title = "Book2"
book2.author = "Author2"
book2.year = "year2"
console.log(book2.author) 
console.log(book2["author"])

//#3
let obj3 = Object.create({x:1,y:2,z:3})
console.log(obj3.x + obj3.y + obj3.z)


/*
let obj = new Object()
obj.name="Sai"
obj.age=10
obj.subject="Maths"
obj.year="2025"
*/

//A class can be created using the keyword "function" - JS is a functional programming language
function Student(name,age,subject,year){
    this.name=name
    this.age=age
    this.subject=subject
    this.year=year
}

let std1 = new Student()
console.log(std1)
/*
Student {
  name: undefined,
  age: undefined,
  subject: undefined,
  year: undefined
}
*/
let std2 = new Student("Sai", 10, "Maths", 2025)
console.log(std2) //Student { name: 'Sai', age: 10, subject: 'Maths', year: 2025 }



// __proto__ gives the hidden methods of the Object
let a = new Object()
a.name="sai"
a.age=10
console.log(a.__proto__)


