//const $form = document.querySelector('#carta-a-santa');
//const nombre = $form.nombre.value;
//const ciudad = $form.ciudad.value;
//const comportamiento = $form.comportamiento.value;
//const regalo = $form['descripcion-regalo'].value;
//nombre = document.querySelector('name=nombre').value;
//nombre = document.querySelector('#nombre').value;
//todas estas sentencias son equivalentes

function validarNombre(nombre){
   if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }

    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if(!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras';
    }

    //si no hay error devuelvo un string vacio
    return '';
}

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
    if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return 'El campo descripcion solo puede tener numeros y letras';
    }
    if(descripcionRegalo.length >=100){
        return 'El campo debe tener menos de 100 caracteres';
    }
    return '';
}

 function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,  
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo
    };

    console.log(errores);

    manejarErrores(errores);

    event.preventDefault();
 }

 function manejarErrores(errores){
    errorNombre = errores.nombre; //nombre
    errorCiudad = errores.ciudad; //ciudad
    errorDescripcionRegalo = errores.descripcionRegalo ; //descripcionRegalo

    if(errorNombre){
        $form.nombre.className = 'error';
    } else {
        $form.nombre.className = '';
    }

    if(errorCiudad){
        $form.ciudad.className = 'error';
    } else {
        $form.ciudad.className = '';
    }

    if(errorDescripcionRegalo){
        $form['descripcion-regalo'].className = 'error';
    } else {
        $form['descripcion-regalo'].className = '';
    }
 }

 const $form = document.querySelector('#carta-a-santa');
 $form.onsubmit = validarFormulario;