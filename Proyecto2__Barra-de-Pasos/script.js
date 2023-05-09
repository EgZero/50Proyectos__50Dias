const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");

const numbers = document.querySelectorAll("[data-number]");

let activado = 0;
comprobarPasos();

nextButton.addEventListener('click', ()=>{
    if(activado <= numbers.length){
        activado++
    }
    if(!numbers[activado].classList.contains("done")){
        numbers[activado].classList.add("done")
        comprobarPasos()
        actualizarBarra()
    }
})

prevButton.addEventListener('click', ()=>{
    if(numbers[activado].classList.contains("done") & activado != 0){
        numbers[activado].classList.remove("done")
        comprobarPasos()
    }
    if(activado > 0){
        activado--
        actualizarBarra()
    }
})

function comprobarPasos(){
    if(activado === numbers.length-1){
        nextButton.disabled = true
        nextButton.style.backgroundColor = '#ccc'
    }else if(activado === 0){
        prevButton.disabled = true
        prevButton.style.borderColor = '#ccc'
    }else{
        nextButton.disabled = false
        nextButton.style.backgroundColor = '#05f'
        prevButton.disabled = false
        prevButton.style.borderColor = '#05f'
    }
}

function actualizarBarra(){
    const barra = document.querySelector("[data-progressBar]")
    const activados = document.querySelectorAll(".done").length
    barra.style.width = (((activados-1) / (numbers.length-1))*100) + "%";

} 