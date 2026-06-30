function say(){
    console.log("S");
    console.log("a");
    console.log("m");
}
// say()
function add(num1, num2){
    return num1+num2
}
const result=add(3,4)
//console.log("Result: ", result);
//if no values passed then it shows undefined not any enlty value

function login(username="sam"){ //predefine value if no value pass minimum this will appear
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(login())
//in js ""and undefined is consider false
//... rest and spread operator(based on their use)

function calculate(val1, val2, ...num1){
    return num1
}

console.log(calculate(200, 400, 500, 2000))

const user = {
    username: "somesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price:399
})
const arr=[300,200,400]
function retsecval(getArr){
    return getArr[1]
}
//console.log(retsecval(arr));
console.log(retsecval([300,200,400]));