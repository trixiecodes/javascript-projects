//document.getElementById("count-el").innerText = 5
// let myAge = 17
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function total(){
//     let total_lap = lap1 + lap2 + lap3
//     console.log(total_lap)
// }

// total()

// let lapsCompleted = 0

// function lapIncrement(){
//     lapsCompleted = lapsCompleted + 1
// }

// lapIncrement()
// lapIncrement()
// lapIncrement()

// console.log(lapsCompleted)


//DOM = Document Object Model - how you use javascript to modify a website
//document - HTML document what you are interacting with
//object 
//model - representation for the element
// let names = "Diane"
// let greeting = "Hello, my name is "

// let myGreeting = greeting  + names
// console.log(myGreeting)

// 


// let welcomeEl = document.getElementById("welcome-el")
// let names = "Diane"
// let greeting = "Welcome Back, "
// let myGreeting = greeting + names
// let greetings = welcomeEl.innerText = myGreeting

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
