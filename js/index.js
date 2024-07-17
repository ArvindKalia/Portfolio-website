// toggler code

let togglerBtn= document.querySelector(".toggler-btn")
let sideNav= document.querySelector(".side-nav")
let title= document.querySelector("#title")

togglerBtn.onclick=()=>{
    sideNav.classList.toggle("active")
}

// start title animation
let array= ["Designer      ", "Web Developer      ", "Engineer      "]
let arrIndex=0 
let charIndex=0

function updateTitle(){
    charIndex++
    title.innerHTML="I'm <span>"+array[arrIndex].slice(0,charIndex)+"</span>"
    if(charIndex==array[arrIndex].length)
    {
        arrIndex++;
        charIndex=0
    }
    if(arrIndex==array.length)
    {
        arrIndex=0
    }
    setTimeout(updateTitle,150)

}
updateTitle()