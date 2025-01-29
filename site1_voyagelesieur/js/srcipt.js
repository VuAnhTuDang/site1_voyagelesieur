const btPlus = document.querySelector('.js-plus');

const conteneurTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click',fouvreferme);

function fouvreferme(){
    conteneurTransport.classList.toggle('conteneur-transport-invisible');

   console.log("hh");
};