function kitchen(){
    let counter = 0;
    return function(){
        counter++;
        return counter
        
    }
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());