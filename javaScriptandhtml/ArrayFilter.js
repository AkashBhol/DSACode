let arr=[12,18,22,3,56];
//to find the adult age using filter method
let p=arr.filter(checkAdult);
function checkAdult(age)
{
    return age>=18;
}
document.write(p+"<br>");

//find the employee whos salary is more then 50000
let t=[200000,900000,80000,6900,6464,4647637674];
let u=t.filter(checksalary);
function checksalary(sal)
{
    return sal>=50000;
}
document.write(u);