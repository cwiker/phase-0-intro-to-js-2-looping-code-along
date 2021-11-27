const array = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wondeful ${event} gift!`);
    debugger;}
    return array;
}



count = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function countDown(count) {
    for (let i = 10; i > count.length; i--);
    console.log(count[i]);
    
}