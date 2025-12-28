let score = "33"
console.log( typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
let score2="33xyz"
let valueInNumber2=Number(score2)
console.log(valueInNumber2)
console.log( typeof valueInNumber2)
let score3=null
console.log(Number(score3))
let score4=undefined
console.log(Number(score4))
let bool1=true
let bool2= false
console.log(Number(bool1))
console.log(Number(bool2))
let boolNo=Number(bool2)
console.log(typeof boolNo)
//NUMBER
//"33"=>33
//"33xyz" =>NAN  type is Number
//true => 1, false => 0
//Boolean
let IsLoggedIn = 1;
let boolLoggedIn=Boolean(IsLoggedIn)//true 0=> false
console.log(boolLoggedIn)

let IsLoggedIn2="Pratik"
console.log(Boolean(IsLoggedIn2))//true
console.log(Boolean(""))//false

//String
let someNumber=33
let strNumber=String(someNumber) //conversion 
console.log(strNumber) //33
console.log(typeof strNumber)//String