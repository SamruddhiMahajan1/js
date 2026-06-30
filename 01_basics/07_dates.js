// dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof myDate);

let createdDate = new Date(2023, 0 , 23)
let createdDate = new Date(2023, 0 , 23, 5, 3)
let createdDate = new Date("01-14-2023")
console.log(createdDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newdate.getDay());

//`${newDate.getDay()} and the time`
newDate.toLocaleString('default', {
    weekday: "long"
})
