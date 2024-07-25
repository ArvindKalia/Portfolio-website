// toggler code

let togglerBtn = document.querySelector(".toggler-btn")
let sideNav = document.querySelector(".side-nav")
let title = document.querySelector("#title")

togglerBtn.onclick = () => {
    sideNav.classList.toggle("active")
}

// start title animation
let array = ["Full-Stack Developer      ","UI/UX Designer      ","Engineer      ","Motivator      "]
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

$(document).ready(function () {
    sessionStorage.removeItem("scroll_completed")
    sessionStorage.removeItem("skillCompleted")
})

$(document).scroll(function () {
    if (sessionStorage.getItem("scroll_completed") == null) {
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
            let number = dataCell / 6
            // console.log(number)
            let increment = Math.floor(number + currentNum)
            // console.log(increment)
            counter.innerText = increment;
            if (increment < dataCell) {
                setTimeout(function () {
                    incrementCounter()
                }, 100)
                sessionStorage.setItem("scroll_completed", "animation")
            }
            else {
                counter.innerText = dataCell
            }
        }
        incrementCounter()
    })
}

// end counter code


//start skill section code

$(document).scroll(function () {
    if (sessionStorage.getItem("skillCompleted") == null) {
        let skillEl = document.querySelector(".skills-section-animate")
        let getAttr = skillEl.getAttribute("class")
        if (getAttr.indexOf("animated") != -1) {
            skillAnimation()
        }
    }
})


function skillAnimation() {
    $(document).ready(function () {
        let html = $(".html").html();
        let css = $(".css").html();
        let javascript = $(".javascript").html();
        let react = $(".react").html();
        let node = $(".node").html();
        let python = $(".python").html();
        let aws = $(".aws").html();
        let sql = $(".sql").html();
        let mongo = $(".mongo").html();
        let express = $(".express").html();
        let bootstrap = $(".bootstrap").html();
        let next = $(".next").html();

        $(".progress-html").animate({ width: html }, 50, function () {
            $(".progress-css").animate({ width: css }, 50, function () {
                $(".progress-javascript").animate({ width: javascript }, 50, function () {
                    $(".progress-react").animate({ width: react }, 50, function () {
                        $(".progress-node").animate({ width: node }, 50, function () {
                            $(".progress-next").animate({ width: next }, 50, function () {
                                $(".progress-python").animate({ width: python }, 50, function () {
                                    $(".progress-aws").animate({ width: aws }, 50, function () {
                                        $(".progress-sql").animate({ width: sql }, 50, function () {
                                            $(".progress-mongo").animate({ width: mongo }, 50, function () {
                                                $(".progress-express").animate({ width: express }, 50, function () {
                                                    $(".progress-bootstrap").animate({ width: bootstrap }, 50, function () {
                                                        sessionStorage.setItem("skillCompleted", "done")
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

//start filter code for portfolio

$(document).ready(function () {
    $(".nav-box li").each(function () {
        $(this).click(function () {
            $(".all").hide();
            $(".nav-box li").removeClass("active")
            $(this).addClass("active")
            let filter = $(this).attr("filter")
            $("." + filter).each(function () {
                $("." + filter).show()
            })
        })
    })
})

//end filter code for portfolio
