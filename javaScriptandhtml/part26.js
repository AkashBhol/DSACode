//global and local variable
//the variable which is declared inside the block or method is known as local variable
//the variable which is declared outside of the block function is known as global variable
let p=4;//global variable
function akash()
{
document.write(p+"<br>");
return p;
}
let g=akash();
document.write(g+"<br>");
document.write(p);
//local scope a variable
function nasim()
{
    var a=10;//that vvariable declared inside the function so you can not return outside to that mmeyh
    document.write(a+"<br>");//a=10
}
let f=nasim();
document.write(f+"<br>");//undefiened
