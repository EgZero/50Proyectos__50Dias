const input = document.querySelector("[data-input]")
const btn = document.querySelector("[data-btn]")

btn.addEventListener("click",(event)=>{
    event.preventDefault()
    input.classList.toggle("shown")
    setTimeout(input.setAttribute("placeholder", "Search..."), 10000)
});