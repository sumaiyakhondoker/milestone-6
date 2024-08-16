function greeting(greetingHandler, name){
   greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning', name);
}


function greetingEvening(name){
    console.log('Good evening', name);
}


function greetingNight(name){
    console.log('Good night', name);
}

greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom cruise');
greeting(greetingEvening, 'solaiman');
greeting(greetingEvening, 'salman');
greeting(greetingNight, 'john');



function submitHandler(){
    console.log('submit button is clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)