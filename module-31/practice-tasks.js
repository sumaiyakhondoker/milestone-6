//practice problem ---> from video: 31-9

// ------------ problem-1 (using map(), filter(), find()) -----------

/**(1)
 --------------- using for..of loop -------------
let evenArr = [];
const numbers = [1,3,5,7,9];
for(let num of numbers){
    num = num + 1;
    evenArr.push(num)
}

 console.log(evenArr);
*/



// ------------using array.map() ------------

/**
const numbers = [11,13,15,17,19];
const evenArr = numbers.map(num => num +1);
console.log(evenArr);
 */


/**(2) 
const arr = [33, 50, 79, 78,90,101,30];
const selected = arr.filter(num => num % 10 === 0)
console.log(selected);

*/


// (2 another) ---------
/**
const arr2 = [33, 50, 79, 78,90,101,30];
const selected2 = arr2.find(num => num % 10 === 0)
console.log(selected2);


 */

// -----(3)
const instructors = [
    {name: 'Nodi', age:28, position: 'Senior'},
    {name: 'Akil', age:26, position: 'Junior'},
    {name: 'shobuj', age:30, position: 'Senior'},

]

const seniors = instructors.filter(instructor => instructor.position === 'Senior');
const result = seniors.map(s=> s.name);

console.log(result);







/**
-----------------using for of loop
let seniors = [];
for( const instructor of instructors){
    if(instructor.position === 'Senior'){
        seniors.push(instructor.name);
    }
}

console.log(seniors);
 */

// ---------------------- practice problem reduce()----------------
// using for loop
/**
const people = [
    {name: 'mina', age: 20},
    {name: 'rina', age: 15},
    {name: 'shuchitra', age: 22}
];

let sum = 0;
for(const human of people){
    sum = sum + human.age;

}


console.log(sum);
 */

// -------------using reduce()------------
/**const people = [
    {name: 'mina', age: 20},
    {name: 'rina', age: 15},
    {name: 'shuchitra', age: 22}
];
const result = people.reduce((previous, current)=> previous + current.age,0)
console.log(result);
 */

// ======================quiz========================

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);  ========> akhetre eta dhore nite hobe j ei condition jokhn true hobe tokhn orthat n k 2 diye vhag korle vhagsesh 1 hobe shegula number gula 1 ta array te rekhe oi array take result dibe.
// console.log(output);
 













