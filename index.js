// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count

}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
    
}

// let userName = 'shubham'

// let massege = "you are a great coder"

// console.log(massege + "," + userName)
