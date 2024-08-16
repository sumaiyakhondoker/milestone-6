// ----------(1)
let first;
// console.log(first);

// ---------(2)
function second(a,b){
    const total = a + b;
}

const result = second();
// console.log(result);

// ---------(3)
function third(a,b,c,d){
    console.log(a,b,c,d);
}

// third(2,5);

// --------(4)
function fourth(a,b){
    if(a<0 || b<0){
        return;
    }

    return a+b;
}

const result2 = fourth(4,-2);
// console.log(result2);

const fifth = {id:2, name:'ponchom', age:40};
// console.log(fifth.age, fifth.salary);


const sixth = [2,4,36,52,45];
// console.log(sixth[2], sixth[5], sixth[10]);


const seventh = [2,4,36,52,45];
delete seventh[2];
console.log(seventh[2], seventh[5], seventh[10]);
// 


