let coinFlip
let timesFlip

timesFlip = prompt('How many times to flip the coin: ')
for (let i = 1; i <= timesFlip; i++) {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}