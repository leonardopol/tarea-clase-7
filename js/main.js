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

    // este nombre, ciudad y descripcionRegalo que recojen los valores de los campos a validar no tienen nada que ver
    // con nombre, ciudad, 'descripcion-regalo' que estan como keys en el objeto errores.
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;
    
    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    //toma los nombres del campo name de los inputs del html
    const errores = {
        nombre: errorNombre,  
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo //tiene que coincidir con el nombre que esta en el parametro name del html
    };

    console.log(errores);

    manejarErrores(errores);

    event.preventDefault();
 }
//Manera dinamica automatico
 function manejarErrores(errores){

    //tomamos las llaves del objeto
    const keys = Object.keys(errores);
    //y las recorremos con el forEach
    keys.forEach(function(key){
        //toma el error en la posicion 0 y asi susecivamente
        const error = errores[key];
        //si hay error (true) pone el marco rojo del css cambiando el className si es falso lo pone en blanco ''
        if(error){
            $form[key].className = "error";
        } else {
            $form[key].className = "";
        }
    });

    const $form = document.querySelector('#carta-a-santa');
    $form.onsubmit = validarFormulario;

    /*
    Manera estatica de hacerlo uno por uno

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
    }*/
 }

 //const $form = document.querySelector('#carta-a-santa');
 //$form.onsubmit = validarFormulario;