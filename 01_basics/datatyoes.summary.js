//primitive

// 7 types : string,  number, boolean, null, undefined. symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null;

let useremail;
const id=Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigNumber = 345462476586567625677n

//reference (non-primitive)

//array, objects, functions

const heros = ["shakti", "bhakti", "yukti"];
let myObj = {
    name: "samu",
    age: 22,
}

const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(typeof anotherId);

// **************************************************

//stack (primitive),  Heap(non-Primitive)

let myname = "sam"
let anothername = myname
anothername="chaiaurcode"

console.log(myname);
console.log(anothername);

let user1 = {
    email:"u@google.com",
    upi: "user@ybl"
}
let user2 = user1
user2.email = "sam@google.com"

console.log(user1.email);
console.log(user2.email);
