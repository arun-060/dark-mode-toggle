const p = document.querySelector("p")
const slider = document.querySelector(".slider")
const body = document.querySelector(".container")
const btn = document.querySelector(".btn")
const button = document.querySelector("button")

btn .addEventListener("click", () => {
    if (p.innerHTML === "Light") {
        p.innerHTML = "Dark"
        p.style.color = "#222943"
        p.style.transform = "translateX(100px)"
        slider.style.transform = "translateX(-110px)"
        body.style.backgroundColor = "white"
        btn.style.backgroundColor = "white"
        button.style.backgroundColor = "linear-gradient(90deg, rgba(9,22,121,1) 0%, rgba(2,0,36,1) 35%, rgba(0,212,255,1) 100%)"
        slider.innerHTML = `<img src="./images/two.jpg" alt="" srcset="">`
    } else if (p.innerHTML === "Dark") {
        p.innerHTML = "Light"
        p.style.color = "white"
        p.style.transform = "translateX(0px)"
        body.style.backgroundColor = "#222943"
        slider.style.transform = "translateX(0)"
        button.style.backgroundColor = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,22,121,1) 35%, rgba(0,212,255,1) 100%)"
        btn.style.backgroundColor = "#222943"
        slider.innerHTML = `<img src="./images/one.jpg" alt="" srcset="">`
    }
})