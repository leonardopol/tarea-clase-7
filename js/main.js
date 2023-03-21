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
    if(!/^[a-z 0-9]+$/i.test(descripcionRegalo)){
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
        'descripcion-regalo': errorDescripcionRegalo 
    };

    console.log(errores);
    eliminarErroresAnteriores();

    const esExito = manejarErrores(errores) === 0;

    if(esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        setTimeout(redireccion,5000);
    }

    event.preventDefault();
 }

 function eliminarErroresAnteriores(){
    const $capturarErrores = document.querySelectorAll('#errores li');
    for (let i = 0; i < $capturarErrores.length; i++) {
    $capturarErrores[i].remove();
  }
 }

 function redireccion(){
    console.log("redireccionando");
    window.location.href = "file:///C:/Users/sistema/Downloads/r-argentinaPrograma/GitHub/clase-7/tarea-clase-7/wishlist.html";
 }

 function manejarErrores(errores){

    
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;
    
    keys.forEach(function(key){
        
        const error = errores[key];
        
        if(error){
            cantidadErrores ++;
            $form[key].className = "error";
            
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);

        } else {
            
                $form[key].className = "";
        }
    });

    return cantidadErrores;
 }

 const $form = document.querySelector('#carta-a-santa');
 $form.onsubmit = validarFormulario;
 