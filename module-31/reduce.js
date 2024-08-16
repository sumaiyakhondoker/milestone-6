const numbers = [2,4,3,5,66];
const result = numbers.reduce((previous, current)=> previous + current, 0);
// console.log(result);
const result2 = numbers.reduce((p,c)=> p+c,0);
console.log(result2);