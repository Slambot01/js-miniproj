// let firstName= "Ritesh";

// let lastName= "Pandit";

// // let fillNam=firstName+lastName;
 
// let fillNam=`${ firstName} ${lastName}`;

// console.log(fillNam)


// let age=90;

// let str=`I am ${age} yerads old`
// ;

// console.log(str);


// function sum(a,b){
// return a+b;

// }

// console.log(sum(5));
 

// const sum=(a,b)=>{
//     `The sum of ${a} & ${b} is :`
//     return a+b;

// }
 
// console.log(sum(6,6));
// let text="Ritesh Pandit";
// let strArr=Array.from(text);
// // console.log(strArr);

// let strMap=strArr.map((currelem,index)=>
// `${currelem} - ${index}`);
// console.log(strMap)
// ;


// let text="Heloo javScript,welocome to javScript";
// let incRes=text.includes("Script");
// console.log(incRes);

// const currdate=new Date();
// console.log(currdate);

//to get time in the most common and readable form
// 

//here we cab=n get only time ans similarly we can replace Date with other time min etc of that toLocaleDateString.
const date=new Date();
let strG=date.toLocaleDateString();
console.log(strG);