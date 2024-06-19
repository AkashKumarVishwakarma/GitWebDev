// let s = require('fs');
// s.writeFile("hey.txt", "Hey hello kaise ho",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


// let s = require('fs');
// s.appendFile("hey.txt", " \nMai to badiya hu..",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


// let s = require('fs');
// s.copyFile("hey.txt","copyfile.txt",function(err){
//     if(err) console.error(err);
//     else {
//         console.log("done");
//     }
// })


// let s = require('fs');
// s.mkdir("basicDemo",function(err){
//     if(err) console.error(err.code);
//     else {
//         console.log("done");
//     }
// })


// let fs = require('fs');
// fs.rename("copyfile.txt","Cfile.txt",(err,data)=>{
//     if(err) throw err;
//     console.log("done")
// })



// ==================================Important ========================


// let fs = require('fs');
// fs.readFile("hey.txt",(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// let s = require('fs');
// s.opendir("D:\\CompleteWebDevbySrey\\Backend\\basic",function(err,data){
//     if(err) console.error(err);
//     else {
//         console.log(data);
//         console.log("done");
//     }
// })
// ================================== Important =========================

// const fs=require("fs");
// fs.unlink('./Cfile.txt',(err)=>{
//     if(err) throw err;
//     console.log("done")
// })


const fs=require("fs");
fs.rmdir('./Demo',(err)=>{
    if(err) throw err;
    console.log("done")
})



