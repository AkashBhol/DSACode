//var Promise= null;
var Mypromise = new Promise(function (resolve, reject) {
    alert("promiises is callingg");
    resolve(56);
    // resolve("akash bhol");

});
document.write("Radhe krishana");
console.log("hi i love code");
// setTimeout(() => {
//    // document.write("Radhe Radhe");
//    console.log("radhe radhe");
// },10000);
setTimeout(() => {
    console.log("this is akash bhhol");//is  a asynchoronous function
}, 2000)
//document.write("akash bhol");
console.log("akash bhhol");
console.log(Mypromise);
let s = new Promise((resove, reject) => {
    resove(40);
    setTimeout(() => {
        console.log("sameer");
    }, 2000)
}).then((value) => {
    console.log(value);
}).catch(() => {
    console.log("Radhe is throwing erroor");
})