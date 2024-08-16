const  players = [75,65,72,63,55,59];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 50);
// const selected = players.filter(p => p > 60);
// ----------- odd  numbers
// const selected = players.filter(p => p % 2 === 1);
// -----------even numbers
const selected = players.filter(p => p % 2 === 0);
// console.log(selected);

const friends = ['Tim', 'John', 'Micheal', 'Oliver', 'Tom', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);
const oddFriends2 = friends.filter(friend => friend.length % 2 === 1);
console.log(oddFriends2);