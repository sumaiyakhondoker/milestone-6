// data access -----Example -1
const data = [{id: 12, name:'abul', address:'kocu khet'}];
// console.log(data[0].address);


// -----Example -2
const products = {
    count: 5000,
    data : [
        {id: 1, name: 'lenevo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000},
    ]
}

// second product er price lagbe
// console.log(products.data[1].price);


//  -----Example -3
const user = {
    id:5001,
    name:'shorifur raj',
    address:{
        street:{
            first: '51/4 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city:'Dhaka'
    }
}
// console.log(user.address.street.second);


// optional chaining
const user2 = {
    id:5002,
    name:'pori bibir majar',
    address:{
        city:'chittagong',
        country: 'Bangladesh'
    }
}


// console.log(user.address.street?.second);
// console.log(user2.address.street?.second);

const user3 = {
    id: 5003,
    name: 'rokeya',
    address:{
        birthPlace: 'rongpur',
        birthYear: 1990,
        isgood: true
    }
}

console.log(user.address.street?.second);
console.log(user3.address.street?.second);
