const boutonPlus = document.querySelector('.js-plus');

const conteneurTransport = document.querySelector('.conteneur-transport');

boutonPlus.addEventListener('click',ouvreFerme)

function ouvreFerme(){
    conteneurTransport.classList.toggle('conteneur-transport-invisible')
};