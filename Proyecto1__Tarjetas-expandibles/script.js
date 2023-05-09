let cards = document.querySelectorAll(".card");


cards.forEach(card =>{
    card.addEventListener('click', ()=>{
        classRemove('active');
        card.classList.add('active');
    })
})

function classRemove(classtoRemove){
    cards.forEach(card => card.classList.remove(classtoRemove))
}