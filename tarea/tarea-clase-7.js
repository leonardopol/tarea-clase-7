/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $form = document.querySelector('#carta-a-santa');
const ciudad = $form.ciudad.value;

const descripcionRegalo = $form['descripcion-regalo'].value;

function validarCiudad(ciudad){
    if(ciudad.length === 0) {
        return 'Este campo no puede estar vacio';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return 'El campo no puede estar vacio';
    }
    if(descripcionRegalo.length >=100){
        return 'El campo debe tener menos de 100 caracteres';
    }
    return '';
}

validarCiudad(ciudad);
validarDescripcionRegalo(descripcionRegalo);

