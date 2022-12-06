//Function: Selecciona un elemento que cumpla con el selector, si no encuentra ninguno devuelve null
/** 
  @param queryString (Obligatorio) => el selector CSS que se usara para localizar el elemento
  @param obj (Opcional) => el objeto dentro del que se buscara el elemento
**/
//*si no se pasa el argumento obj, el elemento se buscara en todo el documento html

const $ = (queryString, obj = document) => obj.querySelector(queryString);

//Function: Selecciona todo elemento que cumpla con el selector, si no encuentra ninguno devuelve null
/**
  @param queryString (Obligatorio) ==> el selector CSS que se usara para localizar los elementos
  @param obj (Opcional) ==> el objeto dentro del que se buscaran los elementos 
**/
//*si no se pasa el argumento obj, los elementos se buscaran en todo el documento html

const $$ = (queryString, obj = document) => obj.querySelectorAll(queryString);

const allDetailsTag = $$("details", $(".acordeon2")); //Seleccionamos todas las etiquetas Details dentro de acordeon2

allDetailsTag.forEach((detailTag) => {
  detailTag.addEventListener("toggle", closeOtherDetailTag); //Agregamos un event listener a toda etiqueta details dentro de acordeon2
});

//Ejecutamos cuando el estado de una etiqueta details dentro de acordeon2 cambia
function closeOtherDetailTag(event) {
  //?Esta etiqueta details esta abierta?
  if (this.open) {
    allDetailsTag.forEach((detailTag) => {
      //Cerramos todas las etiquetas details dentro de acordeon2 que esten abiertas
      if (detailTag !== this && detailTag.open) {
        detailTag.open = false;
      }
    });
  }
}
