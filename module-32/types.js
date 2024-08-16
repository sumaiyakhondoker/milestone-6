
// primitive type
/**
 * 1. number
 * 2. string
 * 3. boolean
 */

let x =5;
let y = x;
console.log(x,y);
y = 7;
console.log(x,y);

// non-primitive type
/**
 * 1.array
 * 2.object
 */

let arr1 = [1,5,3,8];
let arr2 = arr1;
console.log(arr1,arr2);


arr2[2] = 10;
console.log(arr1, arr2);

