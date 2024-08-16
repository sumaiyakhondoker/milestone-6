class Product{
    country = 'Bangladesh';

    constructor(name, address){
        this.name = name;
        this.address = address;

    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('le le lenovo', '54/3 dhanmondi');
// console.log(lenovo);
// lenovo.speak('oba kita kau');


class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir teaching us Math.');
    }
}

const tapan = new Teacher('tapan sir', 'Physics');
console.log(tapan);
tapan.lecture();

const rashid = new Teacher('rashid', 'English');
console.log(rashid);


const manir = new Teacher('manir', 'math');
console.log(manir);