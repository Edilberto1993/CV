const inicio = document.querySelector('#inicio')
const sobreMi = document.querySelector('#sobremi')
const skills = document.querySelector('#skills')
const curriculum = document.querySelector('#curriculum')
const portafolio = document.querySelector('#portfolio')
const contacto = document.querySelector('#contacto')



let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    
} 