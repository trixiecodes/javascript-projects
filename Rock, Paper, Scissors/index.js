let hands = ["rock", "paper", "scissors"]

function getHand() {
    let randomPick = Math.floor (Math.random() * 3)
    return hands[randomPick]
}

console.log( getHand() ) 