function whileLoop1(){
  const array =[]
  let i=0;
  while (i<10){
    array.push(i);
    i++
  }
  return array
  }

console.log("While Loops output", whileLoop1())

function whileLoop2(){
  const array=[]
  let a=0;
  while(a<19){
    array.push(a);
    a+=2
  }
  return array
}
console.log("While loop 2 output", whileLoop2())

function forLoop1(){
  const array=[]
for (let u=0; u<10; u++){
  array.push(u);
}
return array
}
console.log("for loop output", forLoop1())

function forLoop2(){
  for(let fireball=100; fireball>0; fireball--){
   console.log("Time till explosion:", fireball)}
}
console.log(forLoop2())

const object = {name: 'Rat',age:"22",hobby:"art",invention:"juice"}
function forInLoop1(object){
const array = []
for(const prop in object){
  array.push(prop)
}
return array
}
console.log(forInLoop1(object))

function forInLoop2(object){
  const array = []
  for(const string in object){
    array.push(object[string])
  }
  return array
}
console.log(forInLoop2(object))
