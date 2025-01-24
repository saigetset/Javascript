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
