//singleton
//object.create

//object literals

const mySym=Symbol("key1")


const JsUser={
    name: "Samruddhi",
    "full name": "Samruddhi Mahajan",
    [mySym]:"mykey1",
    age: 21,
    location: "Kanpur",
    email: "sam@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="sam01@cat.com"
//Object.freeze(JsUser)
JsUser.email="sam@microsoft.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());