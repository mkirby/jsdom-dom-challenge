// DOM ELEMENTS
const counterContainer = document.querySelector("h1#counter")
const likesContainer = document.querySelector("ul.likes")
const buttonGroup = document.querySelector("#buttons-group")
const allButtons = document.querySelectorAll("button")
//submit comments not started
const submitButton = document.querySelector("#submit")
let paused = false
let count = 0
let likedNumbers = {}
let intervalID;

// EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => { incrementOn(true) })
buttonGroup.addEventListener("click", event => {
    if (event.target.matches("#minus")) {
        changeCount(-1)
    } else if (event.target.matches("#plus")) {
        changeCount(1)
    } else if (event.target.matches("#heart")) {
        likeANumber()
    } else if (event.target.matches("#pause")) {
        togglePause()
    }
})

// EVENT HANDLERS

function likeANumber() {
    //if the number has been liked before
    if (likedNumbers[count]){
        likedNumbers[count] += 1
        const listItem = likesContainer.querySelector(`li[data-num='${count}']`)
        listItem.innerHTML = `${count} has been liked <span>${likedNumbers[count]}</span> times`
    //if the number hasn't been liked before
    } else {
        likedNumbers[count] = 1
        let likedLi =  document.createElement("li")
        likedLi.dataset.num = count
        likedLi.innerHTML = `${count} has been liked <span>1</span> time`
        likesContainer.append(likedLi)
    }
}

function togglePause(event) {
    paused = !paused
    incrementOn(!paused)
    allButtons.forEach(btn => {
        if (btn.innerText != "pause") {
            btn.disabled = paused
        }
    })
    if (paused) {
        document.querySelector("#pause").innerText = "resume"
    } else {
        document.querySelector("#pause").innerText = "pause" 
    }
}

function incrementOn(boolean) {
    if(boolean) {
        intervalID =  setInterval(function(){
            changeCount(1)
        },1000)
    } else {
        clearInterval(intervalID)
    }
}

function changeCount(value) {
    count = count + value
    counterContainer.textContent = count
}