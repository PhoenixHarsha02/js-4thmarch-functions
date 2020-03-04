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


function grade(v){
  if(v>90){
    return "S"
  }
if(v>60 && v<90){
  return "First Class"
}
if(v<35){
  return "Attempt"
}
else{
  return "Second Class"
}}
let x=grade(80);
console.log(x);
//Grade 
//Output:First Class

function vowels(r){
  switch(r){
    case 'A','a':
        console.log("Vowel");
        break;
    case 'E','e':
        console.log("Vowel");
        break;
    case 'I','i':
        console.log("Vowel");
        break;
    case 'O','o':
        console.log("Vowel");
        break;
    case 'U','u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
  }
}
let t=vowels(a);
console.log(t);
//vowels

function prime(w)
{
  if (w===1)
  {
    return false;
  }
  else if(w === 2)
  {
    return true;
  }else
  {
    for(var o = 2; o < w; o++)
    {
      if(w % o === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
let y=prime(20);
