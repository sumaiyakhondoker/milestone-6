// console.log(1)
// console.log(2)
//  setTimeout(()=>{
//      console.log(3)
//  }, 4000)
// console.log(4)
// console.log(5)
// console.log(6)


console.log(1);
console.log(2);
// setTimeout(()=>{
//     console.log(3);
// }, 5000)
console.log(4);
console.log(5);

// setInterval(()=>{
//     console.log('i m u');
// }, 2000)


// let num = 0;
// setInterval(()=>{
//     num++
//     // console.log('i m u');
//     console.log(num);
// },2000)







let num = 0;
const clockId = setInterval(()=>{
    num++;
    
        clearInterval(clockId)
    
    console.log(clockId,num);
},2000)
