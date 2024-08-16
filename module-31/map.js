const numbers = [2,4,3,5,6,10];

function doublIt(num){
    // console.log('num now', num);
    return num*2;
}
const result = numbers.map(doublIt);
// console.log(result); 

// ===============================================================================
const double2 = n => n*2;
const output = numbers.map(double2)
// console.log(output);


// ===============================================================================
const output2 = numbers.map(n=> n*2);
// console.log(output2);

// ===============================================================================
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

// ===============================================================================
const makeSquare = numbers.map(num =>Math.pow(num, 2))
// console.log(makeSquare);
// ===============================================================================
const makeHalf = numbers.map(num => num/2);
// console.log(makeHalf);

// ===============================================================================
const friends = ['Tom', 'John', 'Mickel', 'oliver'];
const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);


const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);
// =============================================
const fiveBonus2 = numbers.map(num => {
    const addFive = num + 5;
    const doubled = addFive * 2;
    return doubled;
});
console.log(fiveBonus2);