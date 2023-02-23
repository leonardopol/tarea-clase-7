/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $form = document.querySelector('#carta-a-santa');
const ciudad = $form.ciudad.value;

function validarCiudad(ciudad){
    if(ciudad === '') {
        'El campo no puede estar vacio';
    }
}

