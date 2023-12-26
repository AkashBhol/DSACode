var a=[{firstnameL:"akash",lastname:"bhol",at:"bimburia"},
{firstnameL:"akash",lastname:"bhol",at:"bimburia"},
{firstnameL:"akash",lastname:"bhol",at:"bimburia"},
{firstnameL:"akash",lastname:"bhol",at:"bimburia"},
    {firstnameL:"akash",lastname:"bhol",at:"bimburia"}
];
console.log(a);
// for( var key in a)
// {
//     for(var p in key){
  
// document.write(key[p]+"<br>");
//     }
// }
for(let i=0;i<=a.length-1;i++)
{
    for(let key in a[i])
    {
        console.log(a);
        document.write(a[i]+""+key+"<br>");
    }
}