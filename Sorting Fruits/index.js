let fruit = ["Apples", "Oranges", "Apples", "Oranges"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "Apples") {
            appleShelf.textContent += "Apples"
        }
       else if (fruit[i] === "Oranges") {
            orangeShelf.textContent += "Oranges"
        }
        
    }
}

sortFruit()