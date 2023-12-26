let p = [3, 2, 4, 2, 56,87, 65];
let k = p.filter((i) => {
    return i % 2 == 0;
})
document.write(k+"<br>");
 p=p.map((o)=>{
    return o*10;

 })
 document.write(p);