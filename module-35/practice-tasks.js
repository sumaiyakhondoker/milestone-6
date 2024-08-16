/*------------Task - 1
(1a) Write a function that displays a message after 5s.


(1b) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.

Input:
delayGreeting(‘Alice’, 2000)

Output:
Hello, Alice!

// ==================(1a ans.)
setTimeout(()=>{
    console.log("Hello.., I'm back after 5 seconds");
}, 5000)


// ---------------1b ans
function delayedGreeting(name, delayTime){
    setTimeout(()=>{
        console.log(`Hello, Good Morning ${name}`);
    },delayTime)

}

delayedGreeting('Nadia', 3000)
*/

/*--------------Task - 2
The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. Complete the code below and see the output.

    function tellJoke() {
     console.log("Why don't scientists trust atoms? Because they make up
     everything!");
    }

    const jokeInterval = setInterval(?, ?);

    // After 10 seconds, stop telling jokes

    setTimeout(() => {

     //write code

    }, ?);


function tellJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
   }

   const jokeInterval = setInterval(tellJoke, 2000);

   // After 10 seconds, stop telling jokes

   setTimeout(() => {

    clearInterval(jokeInterval)
    console.log('10 seconds done');
   }, 10000);

*/
/*-----------------Task - 3
Write an async/await function that fetch data from an api and logs a message.

Input:
https://v2.jokeapi.dev/joke/Programming?type=single


Note: you can use an api of your choice
Output:
Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"


Note: output may change according to the api you used
*/

const fetchedMsg = async()=>{
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json()
    console.log(data);
}


fetchedMsg()


