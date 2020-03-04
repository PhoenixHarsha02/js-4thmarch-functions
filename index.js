let a=520;
let b=250;
function add(x,y){
  return x+y;
}
function sub(x,y){
  return x-y;
}
function mul(x,y){
  return x*y;
}
function div(x,y){
  return x/y;
}
function modulus(x,y){
  return x%y;
}
function power(x,y){
  return x**y;
}
let c=add(a,b);
let d=sub(a,b);
let e=mul(a,b);
let f=div(a,b);
let g=modulus(a,b);
let h=power(a,b);
console.log(`addition of ${a},${b} is ${c}`);
console.log(`subtraction of ${a},${b} is ${d}`);
console.log(`multiplication of ${a},${b} is ${e}`);
console.log(`division of ${a},${b} is ${f}`);
console.log(`modulus of ${a},${b} is ${g}`);
console.log(`power of ${a},${b} is ${h}`);

let ab="apple"
let bc="aball"
let i=ab.localeCompare(bc);
console.log(i);
function compare(a,b){
  console.log(`Comparison of ${a},${b} is ${ab===bc}`);
}
compare(ab,bc);

console.log(`${ab===bc}`?11:0)
//Comparison using ternary operator

function compareas(a,b){
  console.log(`Comparison of ${a},${b} is ${typeof(ab)===typeof(bc)}`);
}
compare(ab,bc);
//Comparevalues

let x
function mark(x)

