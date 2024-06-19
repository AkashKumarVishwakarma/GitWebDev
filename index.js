// console.log("Hello World");
// console.log(7+7);
// for(let i=3; i<6;i++){
//     console.log(i);
// }
// let users={name:"Akash Kumar",age:28,email:"akashgyn@gmail.com"}
// console.log(users);
// console.log(users.name);
// console.log(users.age);
// console.log(users.email);


// //Annnonys Function

// let person=function(a,b){
//     console.log("This is anonymus Fumction")
//     return a+b;
// };
// person();
// console.log(person(34,3))


//Arrow Function

let student=function(){
    console.log("THis ia not Arrow Function")
};

let student1=(a,b)=>{
    let c = a-b;
    console.log("THis ia an Arrow Function(=>)")
    console.log("the substraction of a and b =",c);
}

student();
student1(33,3);

let name = "Pradeep";
module.exports.abc=name;
