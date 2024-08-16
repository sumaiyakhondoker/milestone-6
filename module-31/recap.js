
const [  first,second, third, ...fourth] = [5,23,4,62,12];
console.log(first, second, third,fourth);


const {age, ...remaining} = {name:'sarika', age: 12, isGood: true}
console.log(age, remaining);

