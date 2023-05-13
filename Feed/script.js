const proyectos = document.querySelectorAll(".project__item")
let i = 0

// const vistas = {
//         0: "../images/project1.png",
//         1:"..images/project2.png"
// }
// console.log(vistas[0])

proyectos.forEach(proyecto => {
    i = i +1
    let titulo = proyecto.querySelector(".project__title")
    const nProjectos = proyecto.querySelector(".project__number");
    nProjectos.textContent = "proyecto " + i
    if(!titulo.textContent){
        titulo.innerHTML= "Nada... por ahora"
        titulo.style.textAlign = "center"
        const botones = proyecto.querySelector(".project__buttons")
        proyecto.removeChild(botones)
    }
})