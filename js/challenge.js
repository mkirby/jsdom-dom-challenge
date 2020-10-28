const counter = document.querySelector("h1#counter")
// let count = parseInt(counter.textContent)
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const likesContainer = document.querySelector("ul.likes")
let incNumber;

document.addEventListener('DOMContentLoaded', function(){
    incrementOn(true)
})

function incrementOn(boolean) {
    
    if(boolean) {
         incNumber =  setInterval(function(){
            let count = parseInt(counter.textContent)
            counter.textContent = count + 1
        },1000)
    } else {
        clearInterval(incNumber)
    }
}

minus.addEventListener("click", function(){
    let count = parseInt(counter.textContent)
    counter.textContent = count - 1
})

plus.addEventListener("click", function(){
    let count = parseInt(counter.textContent)
    counter.textContent = count + 1
})

heart.addEventListener("click", likeANumber)

function likeANumber(event) {
    let count = parseInt(counter.textContent)
    if (likesContainer.querySelector(`li[data-num='${count}']`)){
        const listItem = likesContainer.querySelector(`li[data-num='${count}']`)
        const likes = parseInt(listItem.querySelector("span").textContent)
        listItem.querySelector("span").textContent = likes + 1
    } else {
        let likedNumber =  document.createElement("li")
        likedNumber.dataset.num = count
        likedNumber.innerHTML = `
        ${count} has been liked 
        <span> 1 </span>
        times
        `
    
        likesContainer.append(likedNumber)
    
    }
}

pause.addEventListener("click", togglePause)

function togglePause(event) {
    if (pause.innerText === "pause"){
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        pause.innerText = "resume"
        incrementOn(false)
    } else {
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        pause.innerText = "pause" 
        incrementOn(true)
    }

}

// As a user, I should see the timer increment every second once the page has loaded.✅
// As a user, I can manually increment and decrement the counter using the plus and minus buttons. ✅
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes'
// associated with that number. ✅
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.✅
//  5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."