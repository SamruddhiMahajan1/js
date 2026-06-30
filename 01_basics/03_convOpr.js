let score="33abc"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* "33"=>33
"33abs"=>NaN
true=1; false =0
*/
let isLoggedIn=1
let booleanIsloggedIn=Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

//1 = true, 0=flase
//""=false
//"samruddhi"=>true

let some=33
let stringNumber=String(some)
console.log(typeof stringNumber); //string

// ******** Operations ****************************

let value = 3;
let negval = - value
//console.log(negval);

console.log(2+2); //4
console.log(2-2); //0
console.log(2*2);//4
console.log(2**2);//4
console.log(2/2);//1
console.log(2%2);//0

let str1 = "hello"
let str2 = "samruddhi"

let str3 = str1 + str2
console.log(str3); // hello samruddhi

console.log("1"+2);//12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

// console.log( (3+4) *5%3);

console.log(true);//true
console.log(+true)//1
//console.log(ture+);//error
console.log(+"");

let num1, num2, num3
num1=num2=num3=2+2

let game=100
game++;//++game
console.log(game);

const gameName = "MS-Dhoni";

const url = "https://en.wikipedia.org/wiki/MS_Dhoni"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'));