let a={
 firstname:"akash",
 lastname:"bhol",
 village:"bimburia",
 p:[1,2,3,4],
 myfunction:function()
 {
    return this.firstname+" "+this.lastname;
 }
};
console.log(a);
document.write(a);
document.write(myfunction());