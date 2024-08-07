//DOM Traer Elementos

const elementoURL = document.getElementById("inUrl"); //Input del URL

const conteinerCarga = document.getElementById("container-carga"); //Contenedor de La Animacion de Carga

const elementoTitulo = document.getElementById("inTitulo"); //Input del Titulo de la Imagen

const buttonAniadirImg = document.getElementById("aniadirImg"); //Boton de Añadir Imagen

const buttonsEliminar = document.getElementsByClassName("button--eliminar"); //Botones de Eliminar

const buttonsAmpliar = document.getElementsByClassName("button--ampliar"); //Botones de Ampliar

const buttonsCerrar = document.getElementsByClassName("button--close"); //Botones de Cerrar PopUp

const galeria = document.getElementById("main--section"); //Galeria para insertar las imagenes

//Funcion que activa los botones de eliminar

const activarBotonesEliminar = ()=>{
    for (let botonEliminar of buttonsEliminar){
        botonEliminar.addEventListener("click", ()=>{
            botonEliminar.closest("figure").classList.add('Hidden')
            setTimeout(() => { //Se elimina al terminar la animacion
                botonEliminar.parentElement.parentElement.nextElementSibling.remove() //Se elimina el Pop Up // Modal
                botonEliminar.closest("figure").remove() //Se elimina la Figura Completa
            }, 500);
        });
    };
};    

//Funcion que activa los botones de ampliar

const activarImagenesAmpliar = ()=>{
    for (let botonAmpliar of buttonsAmpliar){
        botonAmpliar.addEventListener("click", ()=>{
            /* botonAmpliar.parentElement.parentElement.nextElementSibling.classList.toggle('NoVisible',false); */ //Otra forma de Mostrar el Pop Up
            botonAmpliar.parentElement.parentElement.nextElementSibling.style.opacity = "100";
            botonAmpliar.parentElement.parentElement.nextElementSibling.style.visibility = "visible";
        });
    };
};

//Funcion que cierra el PopUp

const activarCerrarPopUp = ()=>{
    for (let botonCerrar of buttonsCerrar){
        botonCerrar.addEventListener("click", ()=>{
            /* botonCerrar.closest("dialog").classList.toggle('NoVisible',true); */ //Otra forma de Cerrar el Pop Up
            botonCerrar.closest("dialog").style.opacity = "0";
            botonCerrar.closest("dialog").style.visibility = "hidden";
        });
    };
};

//Funcion al presionar boton "Añadir Imagen"

buttonAniadirImg.addEventListener("click", (event)=>{
    event.preventDefault();
    let newURL = elementoURL.value;
    let newTitulo = elementoTitulo.value;
    let newElement = `<figure class="fig">
    <img class="fig__img" src="${newURL}" alt="${newTitulo}">
    <figcaption class="fig__info">
        <h3 class="fig__info__titulo">${newTitulo}</h3>
        <button class="button button--eliminar">Eliminar</button>
        <button class="button button--ampliar">Ampliar</button>
    </figcaption>
    </figure>`;
    let newModal = `<dialog class="modal" style="opacity: 0; visibility: hidden;">
    <img class="modal__img" src="${newURL}" alt="${newTitulo}">
    <button class="button--close">&times;</button>
</dialog>`;
    galeria.innerHTML += newElement;
    galeria.innerHTML += newModal;
    activarBotonesEliminar();
    activarImagenesAmpliar();
    activarCerrarPopUp();
    
})

window.addEventListener("DOMContentLoaded", ()=>{
    conteinerCarga.style.visibility = "hidden";
    conteinerCarga.style.opacity = "0";
});

activarBotonesEliminar();
activarImagenesAmpliar();
activarCerrarPopUp();
