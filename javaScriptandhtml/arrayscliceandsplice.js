let arr=["namsim","rahul","pupun","alok","sameer"];
document.write(arr+"<br>");
let a=[34,56,3,7,2,45,6637,9];
a=a.sort(compare);
document.write(a+"<br>");
function compare(a,b)
{
    return a-b;
}
arr=arr.sort();
document.write(arr+"<br>");
// let p=arr.length;
// document.write(p);
let p=a.length;
document.write(p+"<br>");
document.write(a[6]+"<br>"+a[7]+"<br>");
let k=a.splice(6,7);
document.write(k+"<br>");
let e7=[12.4,34.77,345.89,2.5];
e7=e7.sort(compare1);
function compare1(a,b)
{
    return a-b;
}
document.write(e7+"<br>");
//1st way
//using for loop
for(let i=e7.length-2;i>=e7.length-2;i--)
{
document.write(e7[i]+"<br>");
}
//another way is using splice method in java script
let y=e7.slice(e7.length-3,e7.length-2,e7.length-1);
document.write(y+"<br>");
document.write("++++++++++++++++++++++++++++"+"<br>");
let s=["nasim","abdul","harish"];
s.splice(1,1,"bikasha","prakasha","ananu");
document.write(s);
