// toggler code

let togglerBtn = document.querySelector(".toggler-btn")
let sideNav = document.querySelector(".side-nav")
let title = document.querySelector("#title")

togglerBtn.onclick = () => {
    sideNav.classList.toggle("active")
}

// start title animation
let array = ["Designer      ", "Web Developer      ", "Engineer      "]
let arrIndex = 0
let charIndex = 0

function updateTitle() {
    charIndex++
    title.innerHTML = "I'm <span>" + array[arrIndex].slice(0, charIndex) + "</span>"
    if (charIndex == array[arrIndex].length) {
        arrIndex++;
        charIndex = 0
    }
    if (arrIndex == array.length) {
        arrIndex = 0
    }
    setTimeout(updateTitle, 150)

}
updateTitle()

// start counter code

$(document).ready(function(){
    sessionStorage.removeItem("scroll_completed")
})

$(document).scroll(function () {
   if(sessionStorage.getItem("scroll_completed")==null)
   {
    let factEl = document.querySelector(".fact-section")
    let getAttr = factEl.getAttribute("class")
    if (getAttr.indexOf("animated") != -1) {
        counterAnimation()
    }
   }
})

function counterAnimation() {
    let counterEl = document.querySelectorAll(".fact-counter")

    counterEl.forEach((counter) => {
        counter.innerText = 0

        function incrementCounter() {
            let currentNum = Number(counter.innerText)
            // console.log(typeof(currentNum))
            let dataCell = counter.getAttribute("data-cell")
            let number = dataCell / 10
            // console.log(number)
            let increment = Math.floor(number + currentNum)
            // console.log(increment)
            counter.innerText = increment;
            if (increment < dataCell) {
                setTimeout(function () {
                    incrementCounter()
                }, 100)
                sessionStorage.setItem("scroll_completed","animation")
            }
            else {
                counter.innerText = dataCell
            }
        }
        incrementCounter()
    })
}

// end counter code
