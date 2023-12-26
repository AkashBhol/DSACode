// let p=[1,5,7,8,9];
// p.array.forEach(element => {
// document.write(element);
// });
// const numbers = [1, 2, 3, 4, 5];
// 
// numbers.forEach(function(number) {
//   document.write(number);
// });
// document.write("hi");
document.write("hi this is akash"+"<br>");
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number){
 document.write(number+"<br>");
});


let arr=[22,45,67,4,78];
//sort that arry
arr.sort(assendingsort);
function assendingsort(a,b)
{
 return a-b;
}
document.write(arr+"<br>");

let k=arr.filter(findEven);
function findEven(no)
{
 return no%2==0;
}

document.write(k+"<br>");
k.forEach(function(value,index){
document.write(index+" :"+value+"<br>")
})
