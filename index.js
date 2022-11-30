// Code your solutions in this file
function writeCards(names, surprise) {
    let array = [names];
    return array.forEach(msg => `Thank you, ${msg[0]}, for the wonderful ${surprise} gift!`)
}