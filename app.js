let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let res = document.querySelector("#rstt")
let cifrii = document.querySelector("#header")

increase.addEventListener("click", function(){
    cifrii.innerText++
    changeColor()
})

decrease.addEventListener("click", function(){
    cifrii.innerText--
    changeColor()
})

res.addEventListener("click", function(){
    cifrii.innerText = 0
    changeColor()
})

function changeColor() {
    if(cifrii.innerText > 0 ) {
        cifrii.style.color = "rgb(0, 213, 0)"
    }
    else if (cifrii.innerText < 0) {
        cifrii.style.color = "red"
    } else {
        cifrii.style.color = "rgb(184, 184, 184)"
    }
}