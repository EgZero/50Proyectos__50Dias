const btnAbrir = document.querySelector("[data-open]");
const btnCerrar = document.querySelector("[data-close]");
const navItem = document.querySelectorAll("[data-navItem]");

let margin = 0
navItem.forEach(item => {
    item.style.marginLeft = margin + "px"
    margin = margin + 15
});

btnCerrar.addEventListener("click" , ()=>{
    const container = document.querySelector("[data-container]")
    container.classList.remove("nav_open")
    btnCerrar.disabled = true
    btnAbrir.disabled = false
    navItem.forEach(item =>item.classList.toggle("nav_open"))
    
})

btnAbrir.addEventListener("click" , ()=>{
    const container = document.querySelector("[data-container]")
    container.classList.add("nav_open")
    btnAbrir.disabled = true
    btnCerrar.disabled = false
    navItem.forEach(item =>item.classList.toggle("nav_open"))
})